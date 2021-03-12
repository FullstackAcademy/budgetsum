const { green, red } = require("chalk");
const { db } = require('./server/db');
const { Category } = require('./server/db/models/category')

const seed = async () => {
  try {
  await db.sync({ force: true })
  const categories = [
    {
      name: "Debt"
    },
    {
      name: "Mortgage/Rent"
    },
    {
      name: "Transportation"
    },
    {
      name: "Car"
    },
    {
      name: "Gas"
    },
    {
      name: "Medical"
    },
    {
      name: "Home Improvement"
    },
    {
      name: "Utilities"
    },
    {
      name: "Childcare"
    },
    {
      name: "Entertainment"
    },
    {
      name: "Travel"
    },
    {
      name: "Personal"
    },
    {
      name: "Eating Out"
    },
    {
      name: "Education"
    },
  ]} catch(err){
    console.error(err)
  }
}


async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

if (module === require.main) {
  runSeed()
}

// if (require.main === module) {
//   try{
//     seed()
//     console.log(green("Seeding success!"));
//     db.close();
//   } catch(err){
//     console.error(red("Oh no! Something went wrong!"));
//       console.error(err);
//       db.close();
//   }
// }

module.exports = seed;
