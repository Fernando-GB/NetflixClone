const API_KEY = 'd6f5da42285fa3077674344a42a83220';
const API_BASE = 'https://api.themoviedb.org/3';


const basicFetch = async (endpoint) => {
    const req = await fetch('${API_BASE}${endpoint}');
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais da Netflix',
                items: await basicFetch('/discover/tv?with_network=213&api_key=${API_KEY}')
            },
            {
                slug: 'treding',
                title: 'Recomendados para Você',
                items: await basicFetch('/treding/all/week?api_key=${API_KEY}')
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch('/movie/top_rated?api_key=${API_KEY}')
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch('/discovery/movie?with_genres=28&api_key={API_KEY}')
            },
            {
                slug: 'comedy',
                title: 'Comedia',
                items: await basicFetch('/discovery/movie?with_genres=35&api_key={API_KEY}')
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch('/discovery/movie?with_genres=27&api_key={API_KEY}')
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch('/discovery/movie?with_genres=10749&api_key={API_KEY}')
            },
            {
                slug: 'documentary',
                title: 'Documentário',
                items: await basicFetch('/discovery/movie?with_genres=99&api_key={API_KEY}')
            },
        ];
    }
}