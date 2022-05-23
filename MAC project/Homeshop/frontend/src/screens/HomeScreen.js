import { React } from "react";
import Prodcard from '../components/Prodcard';
import data from "../components/data";

export default function HomeScreen() {
    return (
        <div>
            <div className='row center'>
            {data.prods.map(product =>(
                <Prodcard key={product._id} product={product}></Prodcard>
            ))}
            </div>
        </div>
    )
} 