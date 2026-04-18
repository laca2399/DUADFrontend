/*
1. Cree una función que liste todos los elementos retornados de un GET al endpoint [`https://api.restful-api.dev/objects`]
(https://api.restful-api.dev/objects). Filtre todos los resultados que no retornen `data` , 
y los formatee los que sí lo tienen de forma legible para mostrarlos en pantalla.
    a. Google Pixel 6 Pro (color: Cloudy White, capacity: 128GB)
    Apple iPhone 12 Pro Max (color: Cloudy White, capacity GB: 512)
    Apple iPhone 11, 64GB (price: 389.99, color: Purple)
*/

const getElements = async () => {
	console.log("Requesting data...");
	const response = await fetch(`https://api.restful-api.dev/objects`);
	console.log("Data retrieved!");
	return response.json();
}

const data = await getElements();

const formattedData = data
	.filter(element => element.data)
	.map(element => {
		const details = Object.entries(element.data)
			.map(([key, value]) => `${key}: ${value}`)
			.join(", ");

		return `${element.name} (${details})`;
	});

formattedData.forEach(item => console.log(item));