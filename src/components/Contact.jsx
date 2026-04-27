export default function Contact() {
    return (
      <section id="contact" className="p-5">
        <div className="container">
          <h2>Contact Me</h2>
          <form>
            <input className="form-control mb-3" placeholder="Your Name" />
            <input className="form-control mb-3" placeholder="Email" />
            <textarea className="form-control mb-3" placeholder="Message"></textarea>
            <button className="btn btn-dark">Send</button>
          </form>
        </div>
      </section>
    );
  }