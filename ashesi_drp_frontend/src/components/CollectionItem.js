"use client";
import TruncatedText from "@/components/TruncatedText";

export default function CollectionItem({ title, abstract, date_of_publication, doi_link, keywords }) {
    return (
        <li className="mb-4">
            <a href="">
                <h2 className="italic text-lg text-ashesi-red">{title}</h2>
            </a>
            <hr/>
            <TruncatedText text={abstract} maxLength={150} />
            <div className="flex justify-between text-sm mt-4">
                <p className="text-left">
                    <span className="font-semibold">date of publication: </span>
                    {date_of_publication}
                </p>
                <p className="text-right">
                    <span className="font-semibold">authors: </span>
                    Steph Curry, Jimmy Butler
                </p>
            </div>
            <div className="flex justify-between text-sm">
                <a href={doi_link} target="_blank" rel="noopener noreferrer">
                    <p className="text-left">
                        <span className="font-semibold">doi: </span>
                        {doi_link}
                    </p>
                </a>
                <p className="text-right">
                    <span className="font-semibold">keywords: </span>
                    {keywords}
                </p>
            </div>
        </li>
    );
}