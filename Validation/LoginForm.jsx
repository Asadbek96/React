import React, { useState } from 'react'

export default function LoginForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [comment, setComment] = useState('')
  const [message, setMessage] = useState('')
  const [rating, setRating] = useState('')
  const [comment2, setComment2] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const nameValidation = /^[A-Za-zА-Яа-яЁёҰұҮүҚқҒғӨөҺһІіӘә\s'-]+$/

  const handleSubmit = e => {
    e.preventDefault()
    if (!nameValidation.test(name)) {
      setMessage('Aty joninizde tek aripter bolsyn!')
      return
    }
    if (!email.includes('@')) {
      setMessage('Email-da @ boluy kerek')
      return
    }
    if (comment.length < 20) {
      setMessage('Pikir keminde 20 tanbadan turuy kerek!')
      return
    }
    if (comment2 && comment2.length < 5) {
      setMessage('Nashar baganyn pikiri keminde 5 tanbadan turuy kerek!')
      return
    }

    setMessage('')
    setEmail('')
    setComment('')
    setComment2('')
    setName('')
    setRating('')
  }
  return (
    <div>
      <h2>Keri bailanys formasy</h2>
      <form
        onSubmit={handleSubmit}
        className='cont'
        style={{ display: isSubmitted ? 'none' : 'block' }}
      >
        <div className='name-box'>
          <label htmlFor='name'>Name</label>
          <input
            name='name'
            type='text'
            value={name}
            placeholder=''
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div className='email-box'>
          <label htmlFor='Pochta'>Email</label>
          <input
            name='Pochta'
            type='text'
            value={email}
            placeholder=''
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='comment-box'>
          <label htmlFor=''>Pikiriniz</label>
          <textarea
            name=''
            id=''
            value={comment}
            onChange={e => setComment(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <select
            name='rating'
            id=''
            value={rating}
            onChange={e => setRating(e.target.value)}
            required
          >
            <option value=''>Tandanyz</option>
            <option value='5'>⭐⭐⭐⭐⭐(Ote zhaksy)</option>
            <option value='4'>⭐⭐⭐⭐(Zhaksy)</option>
            <option value='3'>⭐⭐⭐(Ottasha)</option>
            <option value='2'>⭐⭐(Nashar)</option>
            <option value='1'>⭐(Ote nashar)</option>
          </select>
        </div>
        {rating < 3 && rating !== '' && (
          <div className='comment2'>
            <label htmlFor='comment2'>Nashar baganyn sebebi</label>
            <textarea
              name='comment2'
              id=''
              value={comment2}
              onChange={e => setComment2(e.target.value)}
              required
            ></textarea>
          </div>
        )}
        {message && <p style={{ color: 'red' }}>{message}</p>}
        <button type='submit' onClick={() => setIsSubmitted(true)}>
          Kiru
        </button>
      </form>
      {isSubmitted && <h3>Rahmet sizdin pikiriniz manyzdy!</h3>}
    </div>
  )
}
