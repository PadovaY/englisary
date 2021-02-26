import React, {useState, useEffect, useMemo, useCallback} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

const DICTIONARY_KEY = 'englossaryDictionary';

interface DictionaryContextProps{
    addWord: (word: string, translation: string) => void;
    getDictionary: () => string[];
}

export const DictionaryContext = React.createContext<DictionaryContextProps>({
    addWord: () => '',
    getDictionary: () => []
});

export const DictionaryProvider = ({children}: any) => {
    const [dictionary, setDictionary] = useState<string | null>();
    
    useEffect(()=>{
        (async () => {
            const fetchedDictionary = await AsyncStorage.getItem(DICTIONARY_KEY);
            setDictionary(fetchedDictionary)
        })()
    },[])

    
    const addWord = useCallback( async (word, translation) => {
            const parsedDic = JSON.parse(dictionary!);
            const updatedDic = [...parsedDic, {word, translation}];
            await AsyncStorage.setItem(DICTIONARY_KEY, JSON.stringify(updatedDic))
        },
        [dictionary],
    )

    const value = useMemo(() => ({
        addWord,
        getDictionary: dictionary ? JSON.parse(dictionary) : []
    }),[])

    return(
         <DictionaryContext.Provider value={value}>
            {children}
        </DictionaryContext.Provider>
    )
}