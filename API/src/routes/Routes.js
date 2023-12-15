const express = require("express");
const router = express.Router();

const MusicasController = require("../controllers/MusicasController");
const ArtistaController = require("../controllers/ArtistaController");
const AlbumController = require("../controllers/AlbumController");
const AlbumporArtistaController = require("../controllers/AlbumporArtistaController");
const MusicasporArtistaController = require("../controllers/MusicasporArtistaController");
const MusicasporGeneroController = require("../controllers/MusicasporGeneroController");
const Controller = require("../controllers/Controller");

router.get("/Musicas/Count", MusicasController.countMusicas);
router.get("/Musicas", MusicasController.retrieveMusicas);
router.post("/Musicas", MusicasController.createMusica);

router.get("/Musica/:id", MusicasController.retrievemusicas);
router.put("/Musica/:id", MusicasController.updateMusica);
router.delete("/Musica/:id", MusicasController.deleteMusica);

router.get("/Artistas/Count", ArtistaController.countArtista);
router.get("/Artistas", ArtistaController.retrieveArtista);
router.post("/Artistas", ArtistaController.createArtista);

router.get("/Artista/:id", ArtistaController.retrieveartista);
router.put("/Artista/:id", ArtistaController.updateArtista);
router.delete("/Artista/:id", ArtistaController.deleteArtista);

router.get("/Albums/Count", AlbumController.countAlbums);
router.get("/Albums", AlbumController.retrieveAlbums);
router.post("/Albums", AlbumController.createAlbum);

router.get("/Album/:id", AlbumController.retrieveAlbum);
router.put("/Album/:id", AlbumController.updateAlbum);
router.delete("/Album/:id", AlbumController.deleteAlbum);

router.get("/Artista/:id/Album", AlbumporArtistaController.AlbumporArtista);
router.get(
  "/Artista/:id/Musica",
  MusicasporArtistaController.MusicasporArtista
);
router.get(
  "/genero/:genero/Musica",
  MusicasporGeneroController.MusicasporGenero
);

router.get("/", Controller.protected);

module.exports = router;
