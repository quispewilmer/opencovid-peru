import React, { useState } from "react";
import Input from "../Atoms/Input";

const SearchMapbox = ({ theme, text, onSubmit }) => {
	const [value, setValue] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(value);
	};

	return (
		<form
			action=""
			className={`membership-form searchregion-form ${theme}`}
			onSubmit={handleSubmit}
		>
			<Input
				typeOf="submit"
				theme="membership-form__submit membership-form__submit--left searchregion-form__submit py-2 px-3"
				text="      "
			/>
			<Input
				typeOf="text"
				idCustomed="searchregion-form__input"
				theme="searchregion-form__input py-2 px-1 membership-form__input--right"
				placeholderCustomed={text}
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
		</form>
	);
};

export default SearchMapbox;
