import { create } from "zustand";
import axios from "axios";

export const useUserStore = create((set) => ({
    user: null,
    loggedIn: false,
    loading: true,

    checkAuth: async () => {
        try {
            const res = await axios.get(
                "http://localhost:3009/api/check-auth",
                { withCredentials: true }
            );

            set({
                user: res.data.user,
                loggedIn: true,
                loading: false,
            });

        } catch (e) {
            set({
                user: null,
                loggedIn: false,
                loading: false,
            });
        }
    },

    setUser: (user) =>
        set({
            user,
            loggedIn: true,
            loading: false,
        }),

    logout: async () => {
        try {
            await axios.post(
                "http://localhost:3009/auth/logout",
                {},
                { withCredentials: true }
            );

        } catch (e) {
            console.error(e);
        }

        // ALWAYS clear frontend state
        set({
            user: null,
            loggedIn: false,
            loading: false,
        });
    },
}));