



export default function Input({ label, name, register, error }) {
  
  
    return (
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor={name} style={{ display: 'block' }}>
          {label}
        </label>
        <input
          id={name}
          name={name}
          {...register && register(name)}  
          style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        {error && <span style={{ color: 'red' }}>{error.message}</span>}
      </div>
    );
  }
  

