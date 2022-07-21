// di sini kita akan import dari redux toolkit
// yaitu createApi dan fetchBaseQuery

// Perhatikan FROM nya cukup berbeda yah dari yang sebelumnya
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Selanjutnya kita akan membuat APInya di sini
export const tmdbAPI = createApi({
    // Anggap saja ini seperti "name" pada slice
    reducerPath: "tmdbAPI",
    // ini adalah base Query yang akan dibuat
    // Anggap saja ini adalah cara kita untuk mendefiniskan Base URL dari API yang ingin kita gunakan

    // kita akan menggunakan fetchBaseQuery di sini
    baseQuery: fetchBaseQuery({
        // di sini kita akan memberikan opsi baseUrl
        // Karena kita akan menggunakan API nya dari https://reqresin/api <--- ini adalah baseUrl nya
        baseUrl: "https://api.themoviedb.org/3",
    }),

    // Nah selanjutnya kita akan mendefinisikan API ini memiliki endpoint apa saja?
    // ini merupakan sebuah fungsi yang menerima sebuah parameter bernama builder

    // builder ini nantinya akan membantu kita dalam membuat auto generated Hooks-nya

    // Perhatikan fungsi ini akan return Object sehingga kita bungkus dengan ({})
    // jangan lupa "()" nya yah !
    endpoints: (builder) => ({
        // GET /colors <--- HTTP Methodnya adalah GET, kita menggunakan builder.query
        getMovieNowPlaying: builder.query({
            // di sini kita definisikan querynya mau seperti apa
            // Berupa fungsi yah yang mengembalikan string apa yang ditempelkan ke baseUrl

            // ini artinya baseUrl + /colors => https://reqres.in/api/colors
            query: () => "/movie/now_playing?api_key=1e2d079568dbde92bba86fc20b0a3dc1&page=1",
        }),

        getMovieTopRated: builder.query({
            // di sini kita definisikan querynya mau seperti apa
            // Berupa fungsi yah yang mengembalikan string apa yang ditempelkan ke baseUrl

            // ini artinya baseUrl + /colors => https://reqres.in/api/colors
            query: () => "/movie/top_rated?api_key=1e2d079568dbde92bba86fc20b0a3dc1&page=1",
        }),

        getMovieUpcoming: builder.query({
            // di sini kita definisikan querynya mau seperti apa
            // Berupa fungsi yah yang mengembalikan string apa yang ditempelkan ke baseUrl

            // ini artinya baseUrl + /colors => https://reqres.in/api/colors
            query: () => "/movie/upcoming?api_key=1e2d079568dbde92bba86fc20b0a3dc1&page=1",
        }),

        // GET /colors/:id <--- di sini kita akan meminta parameter di dalam endpointnya dengan nama "id"
        // Karena GET, kita masih menggunakan builder.query
        getMoviePopular: builder.query({
            // Sekarang karena kita meminta ada parameter id, kita berikan di dalam fungsi query nya
            // suatu parameter id juga
            query: () => "/movie/popular?api_key=1e2d079568dbde92bba86fc20b0a3dc1&page=1",
        }),

        getMovieGenre: builder.query({
            // di sini kita definisikan querynya mau seperti apa
            // Berupa fungsi yah yang mengembalikan string apa yang ditempelkan ke baseUrl

            // ini artinya baseUrl + /colors => https://reqres.in/api/colors
            query: () => "/genre/movie/list?api_key=1e2d079568dbde92bba86fc20b0a3dc1",
        }),
        getMovieDetail: builder.query({
            // di sini kita definisikan querynya mau seperti apa
            // Berupa fungsi yah yang mengembalikan string apa yang ditempelkan ke baseUrl

            // ini artinya baseUrl + /colors => https://reqres.in/api/colors
            query: (id) => `/movie/${id}?api_key=1e2d079568dbde92bba86fc20b0a3dc1`,
        }),
    }),
});

// Nah setelah mendeskripsikannya, kita akan menggunakannya
// Bagaimana cara menggunakannya?
// Kita akan EXPORT hooks yang dibuat secara otomatis pada createApi di atas

// How to Export?
export const {
    // Nah di sini perhatikan
    // yang diexport adalah hooks yang dibentuk dengan cara penamaan:
    // "use" + nama endpoints + nama fungsi builder yang digunakan

    // contoh:
    // endpoint "colors", menggunakan builder.query
    // maka jadinya adalah useColorsQuery

    // (Hooks ini dibuat secara otomatis, jadi kita tinggal GUNAKAN nanti !)

    useGetMovieNowPlayingQuery,
    useGetMoviePopularQuery,
    useGetMovieUpcomingQuery,
    useGetMovieTopRatedQuery,
    useGetMovieGenreQuery,
    useGetMovieDetailQuery
} = tmdbAPI;