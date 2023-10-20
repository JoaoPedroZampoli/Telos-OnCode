'use client'

import { stringUtils } from "@/utils/stringUtils"
import { Icon } from "@iconify/react/dist/iconify.js"

type AddressProps = AddressType

const Address = ({uf, neighborhood, city}: AddressProps) => {
    const capitalizeNeighborhood = stringUtils.capitalizeFirstCharacterInText(neighborhood ?? "")
    const capitalizeCity = stringUtils.capitalizeFirstCharacterInName(city ?? "")
    const address = `${capitalizeNeighborhood}, ${capitalizeCity} - ${uf?.toUpperCase()}`
    return(
        <div className="flex items-center gap-1 text-sm">
            <Icon icon="fluent:location-28-filled"/>
            <span>{address}</span>
        </div>
    )
}

export default Address