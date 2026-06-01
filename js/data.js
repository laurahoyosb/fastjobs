// js/data.js
const workersData = [
    {
        id: 1,
        name: 'Juan Pérez',
        profession: 'Plomero',
        rating: 4.8,
        reviews: 120,
        price: 30000,
        distance: 2,
        category: 'plomeria',
        image: '🔧'
    },
    {
        id: 2,
        name: 'María López',
        profession: 'Limpieza',
        rating: 4.9,
        reviews: 95,
        price: 25000,
        distance: 1.5,
        category: 'limpieza',
        image: '🧹'
    },
    {
        id: 3,
        name: 'Carlos Ruiz',
        profession: 'Electricista',
        rating: 4.7,
        reviews: 80,
        price: 28000,
        distance: 3.5,
        category: 'electricidad',
        image: '⚡'
    },
    {
        id: 4,
        name: 'Luis Ramírez',
        profession: 'Cerrajero',
        rating: 4.6,
        reviews: 60,
        price: 30000,
        distance: 4,
        category: 'cerrajeria',
        image: '🔒'
    }
];

const activeService = {
    worker: workersData[0],
    status: 'en_camino',
    eta: 12,
    address: 'Calle 123 #45-67',
    date: '12/04/2025',
    time: '03:00 PM'
};