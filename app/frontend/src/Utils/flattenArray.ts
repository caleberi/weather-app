import { MaxHeapInputArray } from "./Trie";

export const flattenMap = (array:MaxHeapInputArray) : MaxHeapInputArray=>{
    let obj:{[key:string]:number} = {};
    for (let idx = 0; idx < array.length; idx++) {
        const e = array[idx];
        if(e.word in obj){
            obj[e.word]+=e.frequency
        }else{
            obj[e.word] = e.frequency 
        }
    }
    return Object.keys(obj).map((k)=>{
        return {word:k,frequency:obj[k]};
    })
}