import React, { useState } from "react";
import Input from "../Atoms/Input";

const SearchMapbox = ({ theme, text, value, onChangeText, onSubmit }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(value);
	};

	// TODO place style into proper class
	return (
		<form
			action=""
			className={`membership-form searchregion-form ${theme}`}
			onSubmit={handleSubmit}
			style={{position: "relative", zIndex: "4"}}
		>
			<Input
				typeOf="submit"
				theme="membership-form__submit membership-form__submit--left searchregion-form__submit py-2 px-3"
				text="      "
			/>
			<Input
				typeOf="text"
				idCustomed="searchregion-form__input"
				theme="searchregion-form__input py-2 px-3 membership-form__input--right"
				placeholderCustomed={text}
				value={value}
				onChange={(e) => onChangeText(e.target.value)}
			/>
		</form>
	);
};

export default SearchMapbox;
