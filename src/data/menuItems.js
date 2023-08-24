import {
    blendFlavorItems, 
    coldFlavorItems, 
    hotFlavorItems, 
    magicalFlavorItems
} from './flavorItems.js';

export const menuItems = [
    {
        id: 1,
        name: 'cafe',
        color: 'bg-color4',
        screen: 'cafe',
        flavors: [
            {
                id: 1,
                name: 'hot',
                items: hotFlavorItems,
            },
            {
                id: 2,
                name: 'cold',
                items: coldFlavorItems,
            },
            {
                id: 3,
                name: 'blends',
                items: blendFlavorItems,
            },
            {
                id: 4,
                name: 'magical',
                items: magicalFlavorItems,
            },
        ]
    },
    {
        id: 2,
        name: 'beber',
        color: 'bg-color5',
        screen: 'beber',
        flavors: [
            {
                id: 1,
                name: 'hot',
                items: hotFlavorItems,
            },
            {
                id: 2,
                name: 'cold',
                items: coldFlavorItems,
            },
            {
                id: 3,
                name: 'blends',
                items: blendFlavorItems,
            },
            {
                id: 4,
                name: 'magical',
                items: magicalFlavorItems,
            },
        ]
    },
    {
        id: 3,
        name: 'vino',
        color: 'bg-color6',
        screen: 'vino',
        flavors: [
            {
                id: 1,
                name: 'hot',
                items: hotFlavorItems,
            },
            {
                id: 2,
                name: 'cold',
                items: coldFlavorItems,
            },
            {
                id: 3,
                name: 'blends',
                items: blendFlavorItems,
            },
            {
                id: 4,
                name: 'magical',
                items: magicalFlavorItems,
            },
        ]
    },
    {
        id: 4,
        name: 'la hora',
        color: 'bg-color7',
        screen: 'la hora',
        flavors: [
            {
                id: 1,
                name: 'hot',
                items: hotFlavorItems,
            },
            {
                id: 2,
                name: 'cold',
                items: coldFlavorItems,
            },
            {
                id: 3,
                name: 'blends',
                items: blendFlavorItems,
            },
            {
                id: 4,
                name: 'magical',
                items: magicalFlavorItems,
            },
        ]
    }
]