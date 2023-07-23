import { Column, SortOrder, User } from ".";

export const buildDefaultUser = (newUserId: number): User => ({
  id: newUserId,
  username: `new-user-${newUserId}`,
  email: `new-user-${newUserId}@gmail.com`,
  phone: "999999",
});

export const buildNewUserId = (users: User[]) => users.length + 1;

export const filterUsers = (users: User[], searchText: string, sortBy: Column, sortOrder: SortOrder) => {
    let filteredData = users.filter(
        (user) =>
          user.username.toLowerCase().includes(searchText.toLowerCase()) ||
          user.email.toLowerCase().includes(searchText.toLowerCase())
      );
      if (sortBy && sortOrder) {
        filteredData = filteredData.sort((a, b) => {
          const sortOrderMultiplier = sortOrder === "asc" ? 1 : -1;
  
          if (a[sortBy] > b[sortBy]) {
            return sortOrderMultiplier;
          }
          if (b[sortBy] > a[sortBy]) {
            return -sortOrderMultiplier
          }
          return 0
        });
      }

      return filteredData
}
