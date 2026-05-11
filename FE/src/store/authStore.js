import { create } from "zustand";
import API from "../lib/axios";

export const useUserStore = create((set) => ({
    user: null,
    loggedIn: false,
    loading: true,

    checkAuth: async () => {
        try {
            const res = await API.get(
                "/api/check-auth",
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
            await API.post(
                "/auth/logout",
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