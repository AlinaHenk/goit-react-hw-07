import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./contactsOps";
import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "./filtersSlice";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const selectContacts = (state) => {
  return state.contacts.items;
};

export const { addContact, deleteContact } = slice.actions;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filterText) => {
    return contacts.filter(
      (contact) =>
        contact.name
          .toLowerCase()
          .trim()
          .indexOf(filterText.toLowerCase().trim(), 0) >= 0 || filterText === ""
    );
  }
);

export default slice.reducer;
