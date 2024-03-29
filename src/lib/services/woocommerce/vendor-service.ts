import { getWoocommerceApi } from './../../utils/server'
import { serializeNonPOJOs } from '$lib/utils/validations'
import { error } from '@sveltejs/kit'

export const fetchVendor = async ({ origin, id, storeId, server = false, sid = null }: any) => {
	try {
		let res: any = {}
		res = await getWoocommerceApi(`customers/me`, {}, sid)
		return res.data || []
	} catch (e) {
		error(e.status, e.data?.message || e.message)
	}
}

export const fetchProductsOfVendor = async ({
	origin,
	id,
	storeId,
	server = false,
	sid = null
}: any) => {
	try {
		let res: any = {}

		res = await getWoocommerceApi(`customers/me`, {}, sid)

		return res.data || []
	} catch (e) {
		error(e.status, e.data?.message || e.message)
	}
}
