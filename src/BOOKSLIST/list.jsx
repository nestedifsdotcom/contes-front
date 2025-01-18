import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./books.css";

import book1 from "./books/book1.jpg";
import book2 from "./books/book2.jpg";
import book3 from "./books/book3.jpg";
import book4 from "./books/book4.jpg";
import book5 from "./books/book5.jpg";
import book6 from "./books/book6.jpg";
import book7 from "./books/book7.jpg";
import book8 from "./books/book8.jpg";
import book9 from "./books/book9.jpg";
import book10 from "./books/book10.jpg";
import book11 from "./books/book11.jpg";
import book12 from "./books/book12.jpg";
import book13 from "./books/book13.jpg";
import book14 from "./books/book14.jpg";
import book15 from "./books/book15.jpg";
import book16 from "./books/book16.jpg";
import book17 from "./books/book17.jpg";
import book18 from "./books/book18.jpg";
import book19 from "./books/book19.jpg";
import book20 from "./books/book20.jpg";
import book21 from "./books/book21.jpg";
import book22 from "./books/book22.jpg";
import { BookCover } from "../Components/BookCover/BookCover";
const myBooks = [
	{
		src: book1,
		title: "title of the book",
		description: "description of the book",
	},
	{
		src: book2,
		title: "title of the book",
		description: "description of the book",
	},
	{
		src: book3,
		title: "title of the book",
		description: "description of the book",
	},
	{
		src: book4,
		title: "title of the book",
		description: "description of the book",
	},
	{
		src: book5,
		title: "title of the book",
		description: "description of the book",
	},
	{
		src: book6,
		title: "title of the book",
		description: "description of the book",
	},
	{
		src: book7,
		title: "title of the book",
		description: "description of the book",
	},
	{
		src: book8,
		title: "title of the book",
		description: "description of the book",
	},
	{
		src: book9,
		title: "title of the book",
		description: "description of the book",
	},
	{
		src: book10,
		title: "title of the book",
		description: "description of the book",
	},
	{
		src: book11,
		title: "title of the book",
		description: "description of the book",
	},
	{
		src: book12,
		title: "title of the book",
		description: "description of the book",
	},
	{
		src: book13,
		title: "title of the book",
		description: "description of the book",
	},
	{
		src: book14,
		title: "title of the book",
		description: "description of the book",
	},
	{
		src: book15,
		title: "title of the book",
		description: "description of the book",
	},
	{
		src: book16,
		title: "title of the book",
		description: "description of the book",
	},
	{
		src: book17,
		title: "title of the book",
		description: "description of the book",
	},
	{
		src: book18,
		title: "title of the book",
		description: "description of the book",
	},
	{
		src: book19,
		title: "title of the book",
		description: "description of the book",
	},
	{
		src: book20,
		title: "title of the book",
		description: "description of the book",
	},
	{
		src: book21,
		title: "title of the book",
		description: "description of the book",
	},
	{
		src: book22,
		title: "title of the book",
		description: "description of the book",
	},
];

export function BOOKSLIST() {
	return (
		<div className="global-container">
			<div className="middle-container">
				<header className="header-actions">
					<nav className="main">
						<a>Accueil</a>
						<a>Histoires</a>
						<a>Jeux</a>
						<a>Se connecter/S'inscrire</a>
					</nav>
					<div className="bar-search">
						<input type="text" placeholder="Rechercher..." />
						<div>
							<FontAwesomeIcon icon={faSearch} size="0.5g" color="black" />
						</div>
					</div>
				</header>
				<div className="books-container">
					<div className="text-intro">
						<p>
							Clique sur un conte et plonge dans un monde magique rempli
							d'aventures incroyables !
						</p>
					</div>
					{myBooks.map((book) => {
						return (
							<BookCover
								imageSrc={book.src}
								title={book.title}
								description={book.description}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
