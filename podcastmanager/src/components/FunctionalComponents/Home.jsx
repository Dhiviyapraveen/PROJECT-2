import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card, ListGroup, Modal, InputGroup, Form } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [filteredPodcasts, setFilteredPodcasts] = useState([]);
  const [customPlaylists, setCustomPlaylists] = useState([]);
  const [selectedPodcast, setSelectedPodcast] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [newPlaylistName, setNewPlaylistName] = useState('');
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const filtered = podcasts.filter(podcast =>
      podcast.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPodcasts(filtered);
  }, [searchTerm, podcasts]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryFilter = (category) => {
    const filtered = podcasts.filter(podcast => podcast.category === category);
    setFilteredPodcasts(filtered);
  };

  const addToPlaylist = (podcast) => {
    if (selectedPlaylist) {
      const updatedPlaylists = customPlaylists.map(playlist =>
        playlist.name === selectedPlaylist.name
          ? { ...playlist, podcasts: [...playlist.podcasts, podcast] }
          : playlist
      );
      setCustomPlaylists(updatedPlaylists);
    }
  };

  const createNewPlaylist = () => {
    if (newPlaylistName) {
      setCustomPlaylists([ ...customPlaylists, { name: newPlaylistName, podcasts: [] } ]);
      setNewPlaylistName('');
      setShowModal(false);
    }
  };

  const removeFromPlaylist = (podcast) => {
    if (selectedPlaylist) {
      const updatedPlaylists = customPlaylists.map(playlist =>
        playlist.name === selectedPlaylist.name
          ? { ...playlist, podcasts: playlist.podcasts.filter(p => p.id !== podcast.id) }
          : playlist
      );
      setCustomPlaylists(updatedPlaylists);
    }
  };

  const playPodcast = (podcast) => {
    setSelectedPodcast(podcast);
  };

  const handlePlaylistSelect = (playlist) => {
    setSelectedPlaylist(playlist);
    setSelectedPodcast(null);
  };

  const handlePlaylistButtonClick = () => {
    setShowModal(true);
  };

  const handlenavigatetopodcast = () => {
    navigate("/podcasts");
  }

  const handlenavigatetoplaylist= () => {
    navigate("/playlist")
  }
  return (
    <Container className="mt-5">
      <Row className="header">
        <Col xs={4} className="podcast-title">
          <h2>PodcastApp</h2>
        </Col>
        <Col xs={4} className="search-bar-col">
          <input
            type="text"
            placeholder="Search by name, creator or topic"
            value={searchTerm}
            onChange={handleSearch}
            className="search-bar"
          />
        </Col>
        <Col xs={4} className="d-flex justify-content-end align-items-center">
        <Button variant="outline-primary" className="mr-2" onClick={handlenavigatetopodcast} >
            podcast
          </Button>
          <Button variant="outline-primary" className="mr-2" onClick={handlenavigatetoplaylist} >
            My Playlist
          </Button>
          <Button variant="outline-primary" className="mr-2">Sign Up</Button>
          <Button variant="dark">Log In</Button>
        </Col>

      </Row>
      <Row className="mt-4">
        <Col>
          <div
            style={{
              backgroundColor: 'rgb(86 10 98)', 
              borderRadius: '15px', 
              padding: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between', 
            }}
          >
            <div style={{ color: 'white', textAlign: 'left', flex: 1 }}>
              <h1>The #1 Most Downloaded Podcast App</h1>
              <h3>
                Podcast App is for the curious.
              </h3>
              <h6 style={{ textAlign: 'justify' }}>
                Play a new discovery or your latest favorite in just a few taps.
              </h6>
              <h6 >Whether you're just getting started or a seasoned listening
                veteran, everything you need to get settled in is at your
                fingertips.</h6>
            </div>
            <img
              src="/podcastimage.webp"
              alt="Placeholder"
              style={{
                width: '380px',
                height: '500px',
                borderRadius:'30px'
                
              }}
            />
          </div>
        </Col>
      </Row>
      <ListGroup className="mt-4">
        {filteredPodcasts.map((podcast) => (
          <ListGroup.Item key={podcast.id}>
            {podcast.title} - {podcast.category}
          </ListGroup.Item>
        ))}
      </ListGroup>

      <div className="browse-category-section">
        <h3>Browse by Category</h3>
        <div className="category-buttons">
          <Button onClick={() => handleCategoryFilter('Development')}>Development</Button>
          <Button onClick={() => handleCategoryFilter('Programming')}>Programming</Button>
          <Button onClick={() => handleCategoryFilter('Design')}>Design</Button>
          <Button onClick={() => handleCategoryFilter('Business')}>Business</Button>
          <Button onClick={() => handleCategoryFilter('Health & Fitness')}>Health & Fitness</Button>
          <Button onClick={() => handleCategoryFilter('Science')}>Science</Button>
          <Button onClick={() => handleCategoryFilter('Music')}>Music</Button>
          <Button onClick={() => handleCategoryFilter('Comedy')}>Comedy</Button>
          <Button onClick={() => handleCategoryFilter('News')}>News</Button>
          <Button onClick={() => handleCategoryFilter('Technology')}>Technology</Button>
          <Button onClick={() => handleCategoryFilter('Sports')}>Sports</Button>
          <Button onClick={() => handleCategoryFilter('TV & Film')}>TV & Film</Button>
        </div>
      </div>
      <div className="keep-in-touch-section">
  <h3>Keep in Touch with Your Interests</h3>
  <div className="interest-buttons">
    <Button onClick={() => handleInterestFilter('Anime')}>Anime</Button>
    <Button onClick={() => handleInterestFilter('Audiobooks')}>Audiobooks</Button>
    <Button onClick={() => handleInterestFilter('Audio Drama')}>Audio Drama</Button>
    <Button onClick={() => handleInterestFilter('Baseball')}>Baseball</Button>
    <Button onClick={() => handleInterestFilter('Bigfoot')}>Bigfoot</Button>
    <Button onClick={() => handleInterestFilter('Black Mirror')}>Black Mirror</Button>
    <Button onClick={() => handleInterestFilter('BoJack Horseman')}>BoJack Horseman</Button>
    <Button onClick={() => handleInterestFilter('Book Reviews')}>Book Reviews</Button>
    <Button onClick={() => handleInterestFilter('Conan Doyle')}>Conan Doyle</Button>
    <Button onClick={() => handleInterestFilter('Conspiracy Theories')}>Conspiracy Theories</Button>
    <Button onClick={() => handleInterestFilter('Crime')}>Crime</Button>
    <Button onClick={() => handleInterestFilter('Dungeon and Dragons')}>Dungeon and Dragons</Button>
    <Button onClick={() => handleInterestFilter('Fortnite')}>Fortnite</Button>
    <Button onClick={() => handleInterestFilter('Game of Thrones')}>Game of Thrones</Button>
    <Button onClick={() => handleInterestFilter('Golf')}>Golf</Button>
    <Button onClick={() => handleInterestFilter('Grey\'s Anatomy')}>Grey's Anatomy</Button>
    <Button onClick={() => handleInterestFilter('Horror')}>Horror</Button>
    <Button onClick={() => handleInterestFilter('League of Legends')}>League of Legends</Button>
    <Button onClick={() => handleInterestFilter('Marvel')}>Marvel</Button>
    <Button onClick={() => handleInterestFilter('Minecraft')}>Minecraft</Button>
    <Button onClick={() => handleInterestFilter('Mystery')}>Mystery</Button>
    <Button onClick={() => handleInterestFilter('NBA')}>NBA</Button>
    <Button onClick={() => handleInterestFilter('NFL')}>NFL</Button>
    <Button onClick={() => handleInterestFilter('Nintendo')}>Nintendo</Button>
    <Button onClick={() => handleInterestFilter('Obama')}>Obama</Button>
    <Button onClick={() => handleInterestFilter('Orange is the New Black')}>Orange is the New Black</Button>
    <Button onClick={() => handleInterestFilter('Overwatch')}>Overwatch</Button>
    <Button onClick={() => handleInterestFilter('Paranormal')}>Paranormal</Button>
    <Button onClick={() => handleInterestFilter('Playstation')}>Playstation</Button>
    <Button onClick={() => handleInterestFilter('Pokemon')}>Pokemon</Button>
    <Button onClick={() => handleInterestFilter('Poker')}>Poker</Button>
    <Button onClick={() => handleInterestFilter('Retro Games')}>Retro Games</Button>
    <Button onClick={() => handleInterestFilter('Sci-Fi')}>Sci-Fi</Button>
    <Button onClick={() => handleInterestFilter('Shakespeare')}>Shakespeare</Button>
    <Button onClick={() => handleInterestFilter('Short Stories')}>Short Stories</Button>
    <Button onClick={() => handleInterestFilter('Soccer')}>Soccer</Button>
    <Button onClick={() => handleInterestFilter('Sports')}>Sports</Button>
    <Button onClick={() => handleInterestFilter('Story Telling')}>Story Telling</Button>
    <Button onClick={() => handleInterestFilter('Stranger Things')}>Stranger Things</Button>
    <Button onClick={() => handleInterestFilter('Tennis')}>Tennis</Button>
    <Button onClick={() => handleInterestFilter('The Sopranos')}>The Sopranos</Button>
    <Button onClick={() => handleInterestFilter('True Crime')}>True Crime</Button>
    <Button onClick={() => handleInterestFilter('True Stories')}>True Stories</Button>
    <Button onClick={() => handleInterestFilter('Trump')}>Trump</Button>
    <Button onClick={() => handleInterestFilter('UFOs')}>UFOs</Button>
    <Button onClick={() => handleInterestFilter('World of Warcraft')}>World of Warcraft</Button>
  </div>
</div>


<div className="language-section center-align">
        <h3>Learn or Practice a New Language</h3>
        <div className="language-buttons">
          <button onClick={() => handleLanguageSelection("Chinese")}>Learn Chinese</button>
          <button onClick={() => handleLanguageSelection("English")}>Learn English</button>
          <button onClick={() => handleLanguageSelection("French")}>Learn French</button>
          <button onClick={() => handleLanguageSelection("German")}>Learn German</button>
          <button onClick={() => handleLanguageSelection("Hindi")}>Learn Hindi</button>
          <button onClick={() => handleLanguageSelection("Portuguese")}>Learn Portuguese</button>
          <button onClick={() => handleLanguageSelection("Spanish")}>Learn Spanish</button>
        </div>
      </div>
      <div className="skill-section center-align">
  <h3>Learn a New Skill</h3>
  <div className="skill-buttons">
    <button onClick={() => handleSkillSelection("Cooking")}>Cooking</button>
    <button onClick={() => handleSkillSelection("Gardening")}>Gardening</button>
    <button onClick={() => handleSkillSelection("Human Resources")}>Human Resources</button>
    <button onClick={() => handleSkillSelection("Knitting")}>Knitting</button>
    <button onClick={() => handleSkillSelection("Leadership")}>Leadership</button>
    <button onClick={() => handleSkillSelection("Machine Learning")}>
      Machine Learning
    </button>
    <button onClick={() => handleSkillSelection("Marketing")}>Marketing</button>
    <button onClick={() => handleSkillSelection("Nursing")}>Nursing</button>
    <button onClick={() => handleSkillSelection("Parenting")}>Parenting</button>
    <button onClick={() => handleSkillSelection("Product Design")}>
      Product Design
    </button>
    <button onClick={() => handleSkillSelection("Product Management")}>
      Product Management
    </button>
    <button onClick={() => handleSkillSelection("Product Marketing")}>
      Product Marketing
    </button>
    <button onClick={() => handleSkillSelection("Quilting")}>Quilting</button>
    <button onClick={() => handleSkillSelection("Sailing")}>Sailing</button>
    <button onClick={() => handleSkillSelection("Software Engineering")}>
      Software Engineering
    </button>
    <button onClick={() => handleSkillSelection("Songwriting")}>
      Songwriting
    </button>
    <button onClick={() => handleSkillSelection("Startup")}>Startup</button>
    <button onClick={() => handleSkillSelection("Woodworking")}>
      Woodworking
    </button>
    <button onClick={() => handleSkillSelection("Writing")}>Writing</button>
  </div>
</div>
<div className="stay-healthy-section center-align">
  <h3>Stay Healthy</h3>
  <div className="stay-healthy-buttons">
    <button onClick={() => handleHealthSelection("Exercising")}>Exercising</button>
    <button onClick={() => handleHealthSelection("Happiness")}>Happiness</button>
    <button onClick={() => handleHealthSelection("Meditation")}>Meditation</button>
    <button onClick={() => handleHealthSelection("Mental Health")}>Mental Health</button>
    <button onClick={() => handleHealthSelection("Motivation")}>Motivation</button>
    <button onClick={() => handleHealthSelection("Nutrition")}>Nutrition</button>
    <button onClick={() => handleHealthSelection("Physical Therapy")}>Physical Therapy</button>
    <button onClick={() => handleHealthSelection("Running")}>Running</button>
    <button onClick={() => handleHealthSelection("Sleep")}>Sleep</button>
    <button onClick={() => handleHealthSelection("Yoga")}>Yoga</button>
  </div>
</div>
<div className="center-align">
        <h3>Learn About Anything You Can Imagine</h3>
        <div className="learn-about-buttons">
          <button onClick={() => handleTopicSelection("Accounting")}>Accounting</button>
          <button onClick={() => handleTopicSelection("Arts and Crafts")}>Arts and Crafts</button>
          <button onClick={() => handleTopicSelection("Biology")}>Biology</button>
          <button onClick={() => handleTopicSelection("Economics")}>Economics</button>
          <button onClick={() => handleTopicSelection("Entrepreneurship")}>Entrepreneurship</button>
          <button onClick={() => handleTopicSelection("Genetics")}>Genetics</button>
          <button onClick={() => handleTopicSelection("Geology")}>Geology</button>
          <button onClick={() => handleTopicSelection("History")}>History</button>
          <button onClick={() => handleTopicSelection("History of the United States")}>History of the United States</button>
          <button onClick={() => handleTopicSelection("Investing")}>Investing</button>
          <button onClick={() => handleTopicSelection("Literature")}>Literature</button>
          <button onClick={() => handleTopicSelection("Maths")}>Maths</button>
          <button onClick={() => handleTopicSelection("Mythology")}>Mythology</button>
          <button onClick={() => handleTopicSelection("Philosophy")}>Philosophy</button>
          <button onClick={() => handleTopicSelection("Poetry")}>Poetry</button>
          <button onClick={() => handleTopicSelection("Psychiatry")}>Psychiatry</button>
          <button onClick={() => handleTopicSelection("Psychology")}>Psychology</button>
          <button onClick={() => handleTopicSelection("Real Estate")}>Real Estate</button>
          <button onClick={() => handleTopicSelection("Science")}>Science</button>
          <button onClick={() => handleTopicSelection("Self Improvement")}>Self Improvement</button>
          <button onClick={() => handleTopicSelection("Sociology")}>Sociology</button>
          <button onClick={() => handleTopicSelection("Tech")}>Tech</button>
          <button onClick={() => handleTopicSelection("More Shows")}>More Shows</button>
        </div>
      </div>


  
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>My Playlists</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Playlists</h5>
          <ListGroup>
            {customPlaylists.map((playlist, index) => (
              <ListGroup.Item key={index} onClick={() => handlePlaylistSelect(playlist)}>
                {playlist.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
          <InputGroup className="mt-3">
            <Form.Control
              type="text"
              placeholder="New Playlist Name"
              value={newPlaylistName}
              onChange={(e) => setNewPlaylistName(e.target.value)}
            />
            <Button variant="outline-secondary" onClick={createNewPlaylist}>
              Create Playlist
            </Button>
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      

   
      <Row>
        {filteredPodcasts.map((podcast) => (
          <Col md={4} key={podcast.id}>
            <Card>
              <Card.Body>
                <Card.Title>{podcast.title}</Card.Title>
                <Button variant="outline-primary" onClick={() => addToPlaylist(podcast)}>
                  Add to Playlist
                </Button>
                <Button variant="outline-danger" onClick={() => removeFromPlaylist(podcast)}>
                  Remove from Playlist
                </Button>
                <Button variant="outline-success" onClick={() => playPodcast(podcast)}>
                  Play
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {selectedPodcast && (
        <ReactPlayer url={selectedPodcast.url} playing controls />
      )}

 
      <footer className="footer">
        <Container>
          <Row>
            <Col className="text-center">
              <p className="underline">Company</p>
              <p>About Us</p>
              <p>Jobs </p>
              <p>Privacy Policy</p>
            </Col>
            <Col className="text-center">
              <p className="underline">Get Help</p>
              <p>
                <a href="mailto:help@podcast.app">help@podcast.app</a>
              </p>
              <p>Customer Support</p>
            </Col>
            <Col className="text-center">
              <p className="underline">Follow Us</p>
              <p>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> |
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> |
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <p>Copyright © Dhiviya. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </Container>
  );
};

export default Home;