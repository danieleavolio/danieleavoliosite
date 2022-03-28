import { writable } from "svelte/store";

export const projectFilterStore = writable();
export const postFilterStore = writable();
export const cardOpened = writable(false);
export const darkModeStore = writable()