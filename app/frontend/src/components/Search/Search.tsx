import React, { useCallback, useEffect, useState } from "react";
import { CgSearch } from "react-icons/cg";
import {
  RetrieveSearchTrieDataRequest,
  StoreSearchTrieDataRequest,
} from "../../protos/protocs/weather_search_service_pb";

import { getWeather } from "../../redux/reducer/weather-reducer";
import { useAppDispatch } from "../../types/type";
import { generateTrie, Trie } from "../../Utils/Trie";
import "./Search.scss";
import { WeatherSearchClient } from "../../api/api";

const Search = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");
  const [trie, setTrie] = useState(new Trie());
  // store current trie auto complete
  const [autoCompleteValue, setAutoCompleteValue] = useState([""]);
  // store incoming new autocomplete data
  const [newAutoCompleteValue, setNewAutoCompleteValue] = useState([""]);
  const saveTrieData = useCallback(async () => {
    let resp = await WeatherSearchClient.storeLatestTrie(
      new StoreSearchTrieDataRequest()
        .setUserId("4582017uw92761")
        .setTrieDataList(newAutoCompleteValue)
    );
    if (resp.getCode() !== 200) return;
  }, [newAutoCompleteValue]);

  const fetchTrieData = useCallback(async () => {
    let resp = await WeatherSearchClient.retrieveLatestTrie(
      new RetrieveSearchTrieDataRequest().setUserId("4582017uw92761")
    );
    if (resp.getCode() !== 200) return;
    setTrie(generateTrie(resp.getTrieDataList()));
  }, []);

  useEffect(() => {
    try {
      fetchTrieData();
    } catch (err) {
      console.log(err);
    }
  }, [fetchTrieData]);

  // useEffect(() => {
  //   try {
  //     saveTrieData();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, [saveTrieData]);

  const onHandlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let possibleSuggestion: string[] = trie
      .search(e.target.value, 5)
    setAutoCompleteValue([...possibleSuggestion]);
    setValue(e.target.value);
  };

  const onSearchCity = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewAutoCompleteValue([...autoCompleteValue, value]);
    dispatch(getWeather(value));
  };

  return (
    <div className="search">
      <form className="search-form" onSubmit={onSearchCity}>
        <input
          id="search__box"
          type="text"
          placeholder="Enter city"
          value={value}
          onChange={onHandlerChange}
          list="search__list__box"
        />
        <button>
          <CgSearch /> Search
        </button>
        <datalist id="search__list__box">
          {
            autoCompleteValue.map((value, index) => {
              return <option key={index} value={value} />
            })
          }
        </datalist>
      </form>
    </div>
  );
};

export default Search;
