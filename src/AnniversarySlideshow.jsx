import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import "./AnniversarySlideshow.css";

const slides = [
  "Hari itu, aku masih tidak menyadari bahwa pertemuan kita akan mengubah hidupku selamanya. 🌸",
  "Aku masih ingat dengan jelas, pertama kali melihat senyummu yang begitu hangat dan tulus. 😊",
  "Kita hanya dua orang asing yang dipertemukan oleh takdir, tanpa tahu bahwa ini adalah awal dari cerita indah kita. 💫",
  "Saat pertama kali berbicara denganmu, aku merasa ada sesuatu yang berbeda, seperti aku telah mengenalmu sejak lama. 💕",
  "Setiap kata yang kau ucapkan saat itu begitu menenangkan, seakan aku menemukan tempat di mana hatiku bisa berlabuh. ⚓",
  "Aku tidak menyangka bahwa pertemuan singkat itu akan berkembang menjadi kisah cinta yang penuh warna seperti sekarang. 🎨",
  "Tatapan matamu hari itu, begitu tulus dan mendalam, membuat hatiku bergetar tanpa alasan yang jelas. 💖",
  "Aku masih ingat bagaimana kita tertawa bersama, tanpa menyadari bahwa detik-detik itu akan menjadi kenangan berharga. ✨",
  "Sejak pertemuan itu, aku mulai menyadari bahwa mungkin, semesta telah merencanakan sesuatu yang indah untuk kita. 🌍",
  "Dan lihatlah kita sekarang, dari awal pertemuan yang sederhana, hingga perjalanan yang penuh makna dan cinta. 💞",
  "🎁 Klik untuk Kejutan!"
];

export default function AnniversarySlideshow() {
  const [index, setIndex] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [showGift, setShowGift] = useState(false);
  const [showFlowers, setShowFlowers] = useState(false);

  const nextSlide = () => {
    if (index === slides.length - 2) {
      setShowGift(true);
    }
    setIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="slideshow-container colorful-background">
      {showIntro ? (
        <div className="intro decorated-intro">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Selamat Datang di Kenangan Kita 🌸💖🌻
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Perjalanan cinta kita dimulai dari satu pertemuan yang indah...
          </motion.p>
          <motion.div
            className="flower-decorations"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            🌻🌷🌹💐🌺🌸
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Button
              onClick={() => {
                setShowIntro(false);
                setButtonClicked(true);
              }}
              className={`start-button ${buttonClicked ? "clicked" : ""}`}
            >
              Mulai
            </Button>
          </motion.div>
        </div>
      ) : (
        <>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="slide"
            >
              {slides[index]}
            </motion.div>
          </AnimatePresence>
          {index < slides.length - 1 && (
            <Button onClick={nextSlide} className="next-button">
              Selanjutnya
            </Button>
          )}
          {showGift && (
            <motion.div
              className="gift-container"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Button
                onClick={() => setShowFlowers(true)}
                className="gift-button"
              >
                Klik untuk Kejutan 🎁
              </Button>
              {showFlowers && (
                <motion.div
                  className="flower-surprise"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  🌻🌷🌹💐🌺🌸
                </motion.div>
              )}
            </motion.div>
          )}
        </>
      )}
    </div>
  );
}
