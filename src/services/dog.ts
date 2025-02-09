import axios from "axios";
import { BACKEND_BASE_URL } from "../constants";
import SearchQueryT from "../types/search";
import DogT from "../types/dog";

const fetchBreeds = (): Promise<string[]> => {
    return new Promise((resolve, reject) => {
        axios.get(`${BACKEND_BASE_URL}/dogs/breeds`, {
            withCredentials: true
        })
            .then((response) => {
                if (response.status === 200 && response.data)
                    resolve(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    });
}

const fetchSearchDogs = (params: SearchQueryT): Promise<string[]> => {
    return new Promise((resolve, reject) => {
        axios.get(`${BACKEND_BASE_URL}/dogs/search`, {
            params,
            withCredentials: true
        })
            .then((response) => {
                if (response.status === 200 && response.data)
                    resolve(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    });
}

export const fetchDogs = async (resultIds: string[]): Promise<DogT[]> => {
    const response = await fetch(`${BACKEND_BASE_URL}/dogs`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(resultIds)
    });

    if (!response.ok) {
        throw new Error("Failed to fetch dogs");
    }

    const dogs = await response.json();
    return dogs.map((dog: DogT) => ({
        ...dog,
        good_with_animals: Math.random() < 0.5,  // 50% chance
        knows_tricks: Math.random() < 0.4,       // 40% chance
        has_license: Math.random() < 0.7,        // 70% chance
        sex: Math.random() < 0.5 ? 'male' : 'female',  // Randomly assign sex
    }));
};

const postMatch = (ids: string[]): Promise<string> => {
    return new Promise((resolve, reject) => {
        axios.post(`${BACKEND_BASE_URL}/dogs/match`, ids, {
            withCredentials: true
        })
            .then((response) => {
                if (response.status === 200 && response.data && response.data.match)
                    resolve(response.data.match);
            })
            .catch((error) => {
                console.log(error);
            })
    });
}

export {
    fetchBreeds,
    fetchSearchDogs,
    postMatch
}