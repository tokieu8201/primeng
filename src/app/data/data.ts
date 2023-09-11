import { Sticket } from "../models/sticket.model";

export const STICKETS: Sticket[] = [
    {
        id: 1,
        status: 'off location',
        delivered: new Date(2023, 1, 2),
        returned: new Date(2023, 2, 3),
        chemical: '15% HCL',
        supplier: 'MultiChem',
        trailer: 15017,
        delivered_qty: 2000,
        current_qty: 0,
        returned_qty: 0,
        net: 2000,
        bol: '20230717-hcl15',
        equipment: 'HAL 2C 400 gal',
        delivery_type: 'Delivery-DropOff',
        pad: 'yes'
    },
    {
        id: 2,
        status: 'standby',
        delivered: new Date(2023, 1, 2),
        returned: new Date(2023, 2, 3),
        chemical: '15% HCL',
        supplier: 'MultiChem',
        trailer: 15017,
        delivered_qty: 2000,
        current_qty: 2000,
        returned_qty: 0,
        net: 2000,
        bol: '20230717-wf',
        equipment: 'HAL 2C 400 gal',
        delivery_type: 'Delivery-DropOff',
        pad: 'no'
    },
    {
        id: 3,
        status: 'rigged in',
        delivered: new Date(2023, 1, 2),
        returned: new Date(2023, 2, 3),
        chemical: 'Transcend-350W',
        supplier: 'Chemical',
        trailer: 15017,
        delivered_qty: 2000,
        current_qty: 2000,
        returned_qty: 0,
        net: 2000,
        bol: '20230717-hcl15',
        equipment: 'HAL 2C 400 gal',
        delivery_type: 'Delivery-DropOff',
        pad: 'yes'
    },
    {
        id: 4,
        status: 'rigged in',
        delivered: new Date(2023, 1, 2),
        returned: new Date(2023, 2, 3),
        chemical: '15% HCL',
        supplier: 'Chemical',
        trailer: 15017,
        delivered_qty: 2000,
        current_qty: 0,
        returned_qty: 0,
        net: 2000,
        bol: '20230717-wf',
        equipment: 'HAL 2C 400 gal',
        delivery_type: 'Delivery-DropOff',
        pad: 'no'
    },
    {
        id: 5,
        status: 'off location',
        delivered: new Date(2023, 1, 2),
        returned: new Date(2023, 2, 3),
        chemical: '15% HCL',
        supplier: 'MultiChem',
        trailer: 15017,
        delivered_qty: 2000,
        current_qty: 4240,
        returned_qty: 0,
        net: 2000,
        bol: '20230717-wf',
        equipment: 'HAL 2C 400 gal',
        delivery_type: 'Delivery-DropOff',
        pad: 'yes'
    },
    {
        id: 6,
        status: 'rigged in',
        delivered: new Date(2023, 1, 2),
        returned: new Date(2023, 2, 3),
        chemical: '15% HCL',
        supplier: 'Halliburton',
        trailer: 15017,
        delivered_qty: 2000,
        current_qty: 0,
        returned_qty: 0,
        net: 5000,
        bol: '20230717-hcl15',
        equipment: 'HAL 2C 400 gal',
        delivery_type: 'Delivery-DropOff',
        pad: 'no'
    },
    {
        id: 7,
        status: 'off location',
        delivered: new Date(2023, 1, 2),
        returned: new Date(2023, 2, 3),
        chemical: '15% HCL',
        supplier: 'Halliburton',
        trailer: 15017,
        delivered_qty: 2000,
        current_qty: 30,
        returned_qty: 0,
        net: 3400,
        bol: '20230717-wf',
        equipment: 'HAL 2C 400 gal',
        delivery_type: 'Delivery-DropOff',
        pad: 'yes'
    },
    {
        id: 8,
        status: 'rigged in',
        delivered: new Date(2023, 1, 2),
        returned: new Date(2023, 2, 3),
        chemical: 'OptiKleen-WF',
        supplier: 'MultiChem',
        trailer: 15017,
        delivered_qty: 2000,
        current_qty: 0,
        returned_qty: 0,
        net: 2000,
        bol: '20230717-hcl15',
        equipment: 'Generic1Compartment',
        delivery_type: 'Delivery-DropOff',
        pad: 'no'
    },
    {
        id: 9,
        status: 'standby',
        delivered: new Date(2023, 1, 2),
        returned: new Date(2023, 2, 3),
        chemical: '15% HCL',
        supplier: 'MultiChem',
        trailer: 15017,
        delivered_qty: 2000,
        current_qty: 0,
        returned_qty: 0,
        net: 2000,
        bol: '20230717-hcl15',
        equipment: 'HAL 2C 400 gal',
        delivery_type: 'Delivery-DropOff',
        pad: 'no'
    },
    {
        id: 10,
        status: 'standby',
        delivered: new Date(2023, 1, 2),
        returned: new Date(2023, 2, 3),
        chemical: 'OptiKleen-WF',
        supplier: 'MultiChem',
        trailer: 15017,
        delivered_qty: 2000,
        current_qty: 0,
        returned_qty: 0,
        net: 2000,
        bol: '20230717-hcl15',
        equipment: 'HAL 2C 400 gal',
        delivery_type: 'Delivery-DropOff',
        pad: 'no'
    },
    {
        id: 11,
        status: 'rigged in',
        delivered: new Date(2023, 1, 2),
        returned: new Date(2023, 2, 3),
        chemical: 'OptiKleen-WF',
        supplier: 'MultiChem',
        trailer: 15017,
        delivered_qty: 2000,
        current_qty: 0,
        returned_qty: 0,
        net: 2000,
        bol: '20230717-hcl15',
        equipment: 'Generic1Compartment',
        delivery_type: 'Delivery-DropOff',
        pad: 'no'
    },
    {
        id: 12,
        status: 'rigged in',
        delivered: new Date(2023, 1, 2),
        returned: new Date(2023, 2, 3),
        chemical: 'OptiKleen-WF',
        supplier: 'MultiChem',
        trailer: 15017,
        delivered_qty: 2000,
        current_qty: 15,
        returned_qty: 0,
        net: 2000,
        bol: '20230717-hcl15',
        equipment: 'Generic1Compartment',
        delivery_type: 'Delivery-DropOff',
        pad: 'no'
    },
    {
        id: 13,
        status: 'rigged in',
        delivered: new Date(2023, 1, 2),
        returned: new Date(2023, 2, 3),
        chemical: 'OptiKleen-WF',
        supplier: 'MultiChem',
        trailer: 15017,
        delivered_qty: 2520,
        current_qty: 0,
        returned_qty: 0,
        net: 2000,
        bol: '20230717-hcl15',
        equipment: 'Generic1Compartment',
        delivery_type: 'Delivery-DropOff',
        pad: 'no'
    },
    {
        id: 14,
        status: 'rigged in',
        delivered: new Date(2023, 1, 2),
        returned: new Date(2023, 2, 3),
        chemical: 'OptiKleen-WF',
        supplier: 'MultiChem',
        trailer: 15017,
        delivered_qty: 2000,
        current_qty: 0,
        returned_qty: 0,
        net: 2000,
        bol: '20230717-hcl15',
        equipment: 'Generic1Compartment',
        delivery_type: 'Delivery-DropOff',
        pad: 'no'
    },
    {
        id: 15,
        status: 'standby',
        delivered: new Date(2023, 1, 2),
        returned: new Date(2023, 2, 3),
        chemical: 'OptiKleen-WF',
        supplier: 'MultiChem',
        trailer: 15017,
        delivered_qty: 2000,
        current_qty: 0,
        returned_qty: 0,
        net: 2000,
        bol: '20230717-hcl15',
        equipment: 'Generic1Compartment',
        delivery_type: 'Delivery-DropOff',
        pad: 'no'
    },
    {
        id: 16,
        status: 'standby',
        delivered: new Date(2023, 1, 2),
        returned: new Date(2023, 2, 3),
        chemical: 'OptiKleen-WF',
        supplier: 'MultiChem',
        trailer: 15017,
        delivered_qty: 2000,
        current_qty: 0,
        returned_qty: 0,
        net: 2000,
        bol: '20230717-hcl15',
        equipment: 'Generic1Compartment',
        delivery_type: 'Delivery-DropOff',
        pad: 'no'
    }
]