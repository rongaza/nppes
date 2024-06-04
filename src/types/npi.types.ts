export interface Address {
	address_1: string;
	address_purpose: string;
	address_type: string;
	city: string;
	country_code: string;
	country_name: string;
	postal_code: string;
	state: string;
	telephone_number: string;
}
export interface Basic {
	credential: string;
	enumeration_date: string;
	first_name: string;
	gender: string;
	last_name: string;
	last_updated: string;
	middle_name: string;
	name_prefix: string;
	name_suffix: string;
	sole_proprietor: string;
	status: string;
	organization_name?: string;
}

export interface Taxonomy {
	code: string;
	taxonomy_group: string;
	desc: string;
	state: string;
	license: string;
}

export interface Provider {
	addresses: Address[];
	basic: Basic;
	taxonomies: Taxonomy[];
	number: string;
	enumeration_type: string;
}
