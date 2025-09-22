const { prisma } = require("../db/config");

async function findUsersSortedByAgeAndName() {
  // Write your code here...
  try {
    const users = await prisma.user.findMany({
      orderBy: [
        { age: "asc" },
        { name: { sort: "asc", mode: "insensitive" } }, // case-insensitive alphabetical
      ],
    });

    return users; // returns [] if no users
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

module.exports = { findUsersSortedByAgeAndName };
