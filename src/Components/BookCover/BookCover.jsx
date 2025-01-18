import "./BookCover.css";
import bookSideImage from "./book-side.png";

export function BookCover({ imageSrc, title, description }) {
	return (
		<div className="book-cover-container">
			<div className="book-cover">
				<img className="book-top" src={imageSrc} alt="book-top" />
				<img className="book-side" src={bookSideImage} alt="book-side" />
			</div>
			<div className="preface">
				<div className="content">
					<div className="header">
						<div className="title">{title}</div>
					</div>
					<div className="body">
						<p>{description}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
