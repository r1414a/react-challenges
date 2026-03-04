import { useFavorites } from "../../context/FavoriteContext"

const NAMES = [
    "Peter",
    "Rose",
    "Jacob",
    "Adam",
    "Isabel",
    "Chealse",
    "Potus",
    "Soloman",
    "Zapata",
]

export default function Home(){
    const {favorites, addToFavorite} = useFavorites();
    console.log(favorites);
    
    return (
        <ul>
            {
                NAMES.map(item => (
                    <li key={item}>
                        <button type="button" onClick={() => addToFavorite(item)}>{item}</button>
                    </li>
                ))
            }
        </ul>
    )
}