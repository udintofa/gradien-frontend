import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// Components

export default function Homepage (props) {
    

    return (
        <>
            <h1>Gradien Nol</h1>
            <h4 style={{ textAlign: 'center' }}>Selamat datang di website Gradien Nol!</h4>

            <hr></hr>

            <p style={{ textAlign: 'center' }}>
                Website ini dibuat untuk membantu para pelajar dalam memahami konsep-konsep matematika dan fisika dengan cara yang lebih interaktif dan menyenangkan. Kami menyediakan berbagai sumber belajar, latihan soal, dan forum diskusi untuk mendukung proses belajar Anda.
            </p>
            <Link
                to="/login"
                style={{
                    textAlign: 'center',
                    display: 'block',
                    textDecoration: 'none'
                }}
                >
                <button
                    style={{
                    cursor: 'pointer'
                    }}
                >
                    Mulai Belajar
                </button>
                </Link>
            <hr></hr>

            <h3>Hal yang akan didapatkan di Gradien</h3>
            <ul>
                <li>Sumber belajar yang lengkap dan mudah dipahami</li>
                <li>Latihan soal untuk menguji pemahaman Anda</li>
                <li>Forum diskusi untuk bertanya dan berbagi pengetahuan</li>
                <li>Tips dan trik belajar yang efektif</li>
            </ul>

        </>
    )
}