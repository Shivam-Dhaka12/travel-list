import { useState } from 'react';

export default function Form({ onAddItems }) {
	const [description, setDescription] = useState('');
	const [quantity, setQuantity] = useState(1);

	function handleSubmit(event) {
		event.preventDefault();
		if (!description) return;

		const newItem = {
			quantity,
			description,
			packed: false,
			id: Date.now(),
		};

		console.log(newItem);
		onAddItems(newItem);

		setQuantity(1);
		setDescription('');
	}
	return (
		<form className="add-form" onSubmit={handleSubmit}>
			<h3>What do you need for your trip?</h3>
			<select
				value={quantity}
				onChange={(e) => setQuantity(Number(e.target.value))}
			>
				{Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
					<option value={num} key={num}>
						{num}
					</option>
				))}
			</select>
			<input
				type="text"
				placeholder="item..."
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			></input>
			<button>Add</button>
		</form>
	);
}
