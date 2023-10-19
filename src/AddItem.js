import { useState } from 'react';

function AddItem(props) {
	const [name, setName] = useState('');
	const [price, setPrice] = useState(0);
	const [type, setType] = useState('');
	const [brand, setBrand] = useState('');

	const addItemButtonPressed = () => {
		props.addItem({
			name: name,
			price: price,
			type: type,
			brand: brand,
		});
		setName('');
		setPrice(0);
		setType('');
		setBrand('');
	};

	return (
		<div className='container'>
			<div className='row'>
				<h2>Add an item</h2>
			</div>

			<div className='row'>
				<label for='name-field'> Name: </label>
				<input
					className='form-control'
					id='name-field'
					type='text'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<label for='price-field'> Price: </label>
				<input
					className='form-control'
					id='price-field'
					type='number'
					value={price}
					onChange={(e) => setPrice(e.target.value)}
				/>
				<label for='type-field'> Type: </label>
				<input
					className='form-control'
					id='type-field'
					type='text'
					value={type}
					onChange={(e) => setType(e.target.value)}
				/>
				<label for='brand-field'> Brand: </label>
				<input
					className='form-control'
					id='brand-field'
					type='text'
					value={brand}
					onChange={(e) => setBrand(e.target.value)}
				/>
			</div>

			<div className='row'>
				<button type='button' className='btn btn-primary mt-3 ' onClick={addItemButtonPressed}>
					Add Item
				</button>
			</div>

			{/* <p>name: {name}</p>
			<p>max-price: {price}</p>
			<p>type: {type}</p>
			<p>brand: {brand} </p> */}
		</div>
	);
}

export default AddItem;
