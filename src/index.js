const { prisma } = require("../db/config");

async function findUsersSortedByAgeAndName() {
  // Write your code here...
  try {
    const users = await prisma.user.findMany({
      orderBy: [
        { age: "asc" },
        { name: "asc" }, // case-sensitive alphabetical sort
      ],
    });

    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

module.exports = { findUsersSortedByAgeAndName };
