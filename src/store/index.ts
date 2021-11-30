import Vuex from 'vuex'

const store: any = new Vuex.Store({
    state: {
        defaultPost: {
            id: 1,
            name: 'The Hobbit An Unexpected Journey',
            image: 'https://wallpaperaccess.com/full/2071679.jpg',
            thumb: 'https://collider.com/wp-content/uploads/the-hobbit-the-battle-of-the-five-armies-poster.jpg',
            desc: 'The Hobbit is a film series consisting of three high fantasy adventure films directed by Peter Jackson.',
            duration: '189 Min',
            genre: 'Action Adventure',
            rating: 'PEGI 16',
            lang: 'En-Us',
            exclusive: true
        },
        recomendedPost: [
            {
                id: 1,
                name: 'The Hobbit An Unexpected Journey',
                image: 'https://wallpaperaccess.com/full/2071679.jpg',
                thumb: 'https://collider.com/wp-content/uploads/the-hobbit-the-battle-of-the-five-armies-poster.jpg',
                desc: 'The Hobbit is a film series consisting of three high fantasy adventure films directed by Peter Jackson.',
                duration: '189 Min',
                genre: 'Action Adventure',
                rating: 'PEGI 16',
                lang: 'En-Us',
                exclusive: true
            },
            {
                id: 2,
                name: 'Red Notice',
                image: 'https://m.media-amazon.com/images/M/MV5BMGQ0OWM3OTQtMDIwNi00ZTIyLThiMjQtZTBkZTUzZWVhNzBmXkEyXkFqcGdeQWFybm8@._V1_QL75_UX1000_CR0,0,1000,563_.jpg',
                thumb: 'https://m.media-amazon.com/images/M/MV5BZmRjODgyMzEtMzIxYS00OWY2LTk4YjUtMGMzZjMzMTZiN2Q0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg',
                desc: 'An Interpol agent tracks the world\'s most wanted art thief.',
                duration: '118 min',
                genre: 'Action, Comedy, Crime',
                rating: 'PG-13',
                lang: 'En-Us',
                exclusive: true
            },
            {
                id: 3,
                name: 'Spider-Man: No Way Home',
                image: 'https://m.media-amazon.com/images/M/MV5BMjViOGJhY2QtYTc0YS00YTUxLTk3ZDctNDI5OGQ2MTRkOTZkXkEyXkFqcGdeQXVyNjc0MTk5MjM@._V1_FMjpg_UX1125_.jpg',
                thumb: 'https://m.media-amazon.com/images/M/MV5BMDUzNWJhZWQtYzU3Zi00M2NjLThjZjEtMTRmMjRmNzBmMWI2XkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_QL75_UX380_CR0,0,380,562_.jpg',
                desc: 'With Spider-Man\'s identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.',
                duration: '158 Min',
                genre: 'Action, Adventure, Sci-Fi',
                rating: 'PEGI 16',
                lang: 'En-Us',
                exclusive: true
            },
            {
                id: 4,
                name: 'Shang-Chi and the Legend of the Ten Rings',
                image: 'https://m.media-amazon.com/images/M/MV5BMGQ2NGExMTYtYmEwMC00MjkwLWFlMDMtZjc4YTJmNTQ1MGFiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1280_.jpg',
                thumb: 'https://m.media-amazon.com/images/M/MV5BNTliYjlkNDQtMjFlNS00NjgzLWFmMWEtYmM2Mzc2Zjg3ZjEyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg',
                desc: 'Shang-Chi, the master of weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.',
                duration: '132 min',
                genre: 'Action, Adventure, Fantasy',
                rating: 'PEGI 13',
                lang: 'En-Us',
                exclusive: false
            },
            {
                id: 5,
                name: 'Eternals ',
                image: 'https://m.media-amazon.com/images/M/MV5BYzFmZDQ3ZjAtYTQ2Ni00ZWY5LWI0OGQtNjlmZDhiNjRmYmFlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1280_.jpg',
                thumb: 'https://m.media-amazon.com/images/M/MV5BMTExZmVjY2ItYTAzYi00MDdlLWFlOWItNTJhMDRjMzQ5ZGY0XkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_QL75_UX380_CR0,0,380,562_.jpg',
                desc: 'The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history and civilizations.',
                duration: '156 min',
                genre: 'Action, Adventure, Fantasy',
                rating: 'PEGI 13',
                lang: 'En-Us',
                exclusive: true
            },
            {
                id: 6,
                name: 'Dune',
                image: 'https://m.media-amazon.com/images/M/MV5BYzczOWFmODQtZGI1MC00N2UyLThlMTctNGYzMzVhY2RjNWFjXkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_FMjpg_UX1280_.jpg',
                thumb: 'https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX380_CR0,1,380,562_.jpg',
                desc: 'Feature adaptation of Frank Herbert\'s science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.',
                duration: '155 Min',
                genre: 'Action, Adventure, Drama',
                rating: 'PEGI 16',
                lang: 'En-Us',
                exclusive: false
            },
            {
                id: 7,
                name: 'No Time to Die ',
                image: 'https://m.media-amazon.com/images/M/MV5BMzBlNDU3OTEtMzZiNy00NzNmLWEzYzMtMTk0YzFjZWQyYjFmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX800_.jpg',
                thumb: 'https://m.media-amazon.com/images/M/MV5BYWQ2NzQ1NjktMzNkNS00MGY1LTgwMmMtYTllYTI5YzNmMmE0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_QL75_UX380_CR0,0,380,562_.jpg',
                desc: 'James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.',
                duration: '163 Min',
                genre: 'Action, Adventure, Thriller',
                rating: 'PEGI 13',
                lang: 'En-Us',
                exclusive: false
            },
            {
                id: 8,
                name: 'Jungle Cruise',
                image: 'https://m.media-amazon.com/images/M/MV5BYmI5YTFiNWEtNjg3Mi00ODhmLTkxMTMtYTMyMzU5MjVkMzRkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1280_.jpg',
                thumb: 'https://m.media-amazon.com/images/M/MV5BNDE1MGRlNTQtZjc4ZC00MTI0LWEwY2MtODk1YTM2NmFmYTNmXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_QL75_UX380_CR0,0,380,562_.jpg',
                desc: 'Based on Disneyland\'s theme park ride where a small riverboat takes a group of travelers through a jungle filled with dangerous animals and reptiles but with a supernatural element.',
                duration: '127 Min',
                genre: 'Action, Adventure, Comedy',
                rating: 'PEGI 16',
                lang: 'En-Us',
                exclusive: false
            },
            {
                id: 9,
                name: 'The Harder They Fall',
                image: 'https://m.media-amazon.com/images/M/MV5BYjJjYWQyMDMtNGI3ZS00YTY5LWIwZDMtNWUyZmE5MTc5MGRiXkEyXkFqcGdeQXVyOTc5MDI5NjE@._V1_FMjpg_UX1280_.jpg',
                thumb: 'https://m.media-amazon.com/images/M/MV5BZTQwYThhZTYtZTQ3MC00NDQ0LWFkZGMtMzdiMTU3OGJiYTY0XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_QL75_UX380_CR0,0,380,562_.jpg',
                desc: 'When an outlaw discovers his enemy is being released from prison, he reunites his gang to seek revenge in this Western.',
                duration: '139 Min',
                genre: 'Action, Drama, Western',
                rating: 'R',
                lang: 'En-Us',
                exclusive: true
            },
            {
                id: 10,
                name: 'Home Sweet Home Alone',
                image: 'https://m.media-amazon.com/images/M/MV5BMGEzZmVlMWEtMjlmZS00MmVhLWIyNzgtYWQ5NjU1ZDY5NDNjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1280_.jpg',
                thumb: 'https://m.media-amazon.com/images/M/MV5BMDlkMzZiM2EtZDMxZC00ZWUwLTliMDMtMGMzMzE3NTEzMThiXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_QL75_UY562_CR35,0,380,562_.jpg',
                desc: 'A married couple tries to steal back a valuable heirloom from a troublesome kid.',
                duration: '93 Min',
                genre: 'Action, Comedy, Family',
                rating: 'PG',
                lang: 'En-Us',
                exclusive: false
            },
            {
                id: 11,
                name: 'Army of Thieves ',
                image: 'https://m.media-amazon.com/images/M/MV5BMzlhODEzYzEtNzM5MC00MWMxLThiMGMtMGUwNTE4M2JkZTAyXkEyXkFqcGdeQXVyOTc5MDI5NjE@._V1_FMjpg_UX1280_.jpg',
                thumb: 'https://m.media-amazon.com/images/M/MV5BZGRlODFlNTItZWFhZS00NjU5LTliNDUtNjUxMGJhMGZhYjFmXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_QL75_UY562_CR35,0,380,562_.jpg',
                desc: 'A prequel, set before the events of Army of the Dead, which focuses on German safecracker Ludwig Dieter leading a group of aspiring thieves on a top secret heist during the early stages of the zombie apocalypse.',
                duration: '127 Min',
                genre: 'Action, Comedy, Crime',
                rating: 'TV-MA',
                lang: 'En-Us',
                exclusive: true
            },
            {
                id: 12,
                name: 'Venom: Let There Be Carnage',
                image: 'https://m.media-amazon.com/images/M/MV5BOGEwNmFjMmMtNGRmZS00ZGZmLWI3NjItOTZjZDZiZjQxY2VhXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1280_.jpg',
                thumb: 'https://m.media-amazon.com/images/M/MV5BYTc3ZTAwYTgtMmM4ZS00MDRiLWI2Y2EtYmRiZmE0YjkzMGY1XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_QL75_UX380_CR0,0,380,562_.jpg',
                desc: 'Eddie Brock attempts to reignite his career by interviewing serial killer Cletus Kasady, who becomes the host of the symbiote Carnage and escapes prison after a failed execution.',
                duration: '97 Min',
                genre: 'Action, Adventure, Sci-Fi',
                rating: 'PEGI 13',
                lang: 'En-Us',
                exclusive: false
            },
        ]
    },
    mutations: {
        changeMainPost(state, value) {
            state.defaultPost = value
            console.log(state.defaultPost)
        }
    },
    actions: {
        initDefaultPost(context, value) {
            context.state.recomendedPost.forEach((e, i, a) => {
                context.state.defaultPost = e[value]
            })
        },
        changeMainPost(context, value) {
            let sortPost = context.state.recomendedPost.map(obj => {
                if (obj.id == value) {
                    context.commit('changeMainPost', obj)
                }
            })
        }
    },
    getters: {
        setDefaultPost(state) {
            return state.defaultPost;
        },
        setRecomendedPost(state) {
            return state.recomendedPost;
        }
    }
})


export default store;