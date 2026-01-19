console.log("Type alias: You can assign a type to a type variable and use it like a real type with different name");
console.log("use \"type\" keyword for type declararion");
type MangaYear = number;
type MangaName = string;
type MangaAuthorName = string;
type MangaIsActive = boolean;

type Manga = {
  year: MangaYear;
  name: MangaName;
  author: MangaAuthorName;
  status: MangaIsActive;
}

const mangaYear: MangaYear = 2019;
const mangaName: MangaName = "SKS";
const mangaAuth: MangaAuthorName = "RMKR"
const mangaStatus: MangaIsActive = false;

const swykksnsks: Manga = {
  year: mangaYear,
  name: mangaName,
  author: mangaAuth,
  status: mangaStatus
}

console.log(`With aliases, type of mangaYear(number) is: ${typeof mangaYear}`);
console.log(`With aliases, type of swykksnsks(Manga) is: ${typeof swykksnsks}`);
