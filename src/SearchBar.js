import { useState } from 'react';

function SearchBar(props) {
	const [name, setName] = useState('');
	const [price, setPrice] = useState(0);
	const [type, setType] = useState('');
	const [brand, setBrand] = useState('');

	const searchButtonPressed = () => {
		props.updateSearchParams({
			name: name,
			price: price,
			type: type,
			brand: brand,
		});
	};

	return (
		<div className='container'>
			<div className='row'>
				<h2>Search for an item</h2>
			</div>
			<div className='row'>
				<div className='col'>
					<label for='name-field'> Name: </label>
					<input
						className='form-control'
						id='name-field'
						type='text'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className='col'>
					<label for='price-field'> Max Price: </label>
					<input
						className='form-control'
						id='price-field'
						type='number'
						value={price}
						onChange={(e) => setPrice(e.target.value)}
					/>
				</div>
				<div className='col'>
					<label for='type-field'> Type: </label>
					<input
						className='form-control'
						id='type-field'
						type='text'
						value={type}
						onChange={(e) => setType(e.target.value)}
					/>
				</div>
				<div className='col'>
					<label for='brand-field'> Brand: </label>
					<input
						className='form-control'
						id='brand-field'
						type='text'
						value={brand}
						onChange={(e) => setBrand(e.target.value)}
					/>
				</div>
			</div>
			<div className='row mt-3'>
				<div className='col-4'></div>
				<button
					type='button'
					className='col-4 btn btn-primary'
					onClick={searchButtonPressed}>
					Search
				</button>
			</div>
			{/* <p>name: {name}</p>
			<p>max-price: {price}</p>
			<p>type: {type}</p>
			<p>brand: {brand} </p> */}
		</div>
	);
}

export default SearchBar;
