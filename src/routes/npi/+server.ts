import { type RequestEvent, json, error } from '@sveltejs/kit';

const NPI_URL = 'https://npiregistry.cms.hhs.gov/api/';

export const GET = async (event: RequestEvent) => {
	const firstName = event.url.searchParams.get('firstName');
	const lastName = event.url.searchParams.get('lastName');
	const city = event.url.searchParams.get('city');
	const state = event.url.searchParams.get('state');

	try {
		const response = await fetch(
			`${NPI_URL}?number=&enumeration_type=&taxonomy_description=&name_purpose=&first_name=${firstName}&use_first_name_alias=&last_name=${lastName}&organization_name=&address_purpose=&city=${city}&state=${state}&postal_code=&country_code=&limit=&skip=&pretty=&version=2.1`,
			{ method: 'GET' }
		);
		const data = await response.json();
		return json({ result_count: data.result_count, results: data.results });
	} catch (err) {
		if (err instanceof Error) {
			return json({ error: err.message, result_coount: 0, results: [] }, { status: 500 });
		}

		return json({ error: 'Unknown error', result_count: 0, results: [] }, { status: 500 });
	}
};
