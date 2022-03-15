export const iconButtonObject = (icon: any, text: string, href: string) => {
    return {
        icon,
        text,
        href,
    }
}

export const dropdownItemObject = (text: string, onClick: any) => {
    return {
        text,
        onClick,
    }
}

export const projectItemObject = (title: string, href: string, tags: any, img: any) => {
    return {
        title,
        href,
        tags,
        img,
    }
}

export const planItemObject = (title: string, price: string, tags: any) => {
    return {
        title,
        price,
        tags,
    }
}
