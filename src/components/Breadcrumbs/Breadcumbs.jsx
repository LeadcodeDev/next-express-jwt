import React from 'react';
import Link from 'next/link';

const Breadcumbs = ({ datas }) => {

    return (
        <ul className="breadcrumb">
            {datas.map((item) => (
                <li className="breadcrumb-item" key={item.title}>
                    {item.title != datas[datas.length - 1].title ? <Link href={item.href}><a>{item.title}</a></Link> : <span className="text-blue">{item.title}</span>}
                </li>
            ))}
        </ul>
    )
}
 
export default Breadcumbs;