import path from 'path';
import express from 'express';
import MongoClient from 'mongodb';

const app = express();

// FUNCTIONS

function getPeople(res) {
  MongoClient.connect('mongodb://localhost:27017/party', (err, db) => {
    if (err) {
      throw err;
    }
    // eslint-disable consistent-return
    db.collection('people').find({ people: { $exists: true } }).toArray((error, doc) => {
      if (!doc.length || doc[0].people == null) {
        db.collection('people').insert({ people: { current: 0, peak: 0 } });
        return 0;
      }
      const people = doc[0].people.current;
      res.setHeader('Content-Type', 'application/json');
      return res.send(JSON.stringify({ people }));
    });
  });
}

function peakCheck(people) {
  MongoClient.connect('mongodb://localhost:27017/party', (err, db) => {
    if (err) {
      throw err;
    }
    db.collection('people').find({ people: { $exists: true } }).toArray((error, doc) => {
      if (!doc.length || doc[0].people == null) {
        db.collection('people').insert({ people: { current: people, peak: people } });
        return 0;
      }
      const current = doc[0].people.current;
      const peak = doc[0].people.peak;
      return db.collection('people').update(
        { people: { $exists: true } },
        { people: { current, peak: Math.max(peak, people) } }
      );
    });
  });
}

function changeByPerson(res, number) {
  MongoClient.connect('mongodb://localhost:27017/party', (err, db) => {
    if (err) {
      throw err;
    }
    db.collection('people').find({ people: { $exists: true } }).toArray((error, doc) => {
      if (!doc.length || doc[0].people == null) {
        db.collection('people').insert({ people: { current: 0, peak: 0 } });
        return 0;
      }
      let people = doc[0].people.current + number;
      const peak = doc[0].people.peak;
      if (people < 0) {
        people = 0;
      }
      peakCheck(people);
      db.collection('people').update(
        { people: { $exists: true } },
        { people: { current: people, peak: Math.max(peak, people) } }
      );
      res.setHeader('Content-Type', 'application/json');
      return res.send(JSON.stringify({ people }));
    });
  });
}

function clearPeople() {
  MongoClient.connect('mongodb://localhost:27017/party', (err, db) => {
    if (err) {
      throw err;
    }
    db.collection('people').find({ people: { $exists: true } }).toArray((error, doc) => {
      if (!doc.length || doc[0].people == null) {
        db.collection('people').insert({ people: { current: 0, peak: 0 } });
        return 0;
      }
      db.collection('people').update(
        { people: { $exists: true } },
        { people: { current: 0, peak: 0 } }
      );
      return true;
    });
  });
}

// Routes

// Serve our static stuff like css
app.use(express.static(path.join(__dirname, 'assets')));

app.get('/party', (req, res) => (
  res.sendFile(path.join(__dirname, 'assets', 'party.html'))
));

app.get('/party/number', (req, res) => (
  getPeople(res)
));

app.get('/party/add', (req, res) => (
  changeByPerson(res, 1)
));

app.get('/party/subtract', (req, res) => (
  changeByPerson(res, -1)
));

app.get('/party/add5', (req, res) => (
  changeByPerson(res, 5)
));

app.get('/party/subtract5', (req, res) => (
  changeByPerson(res, -5)
));

app.get('/party/clear', () => (
  clearPeople()
));

app.get('/banner.jpg', (req, res) => (
  res.sendFile(path.join(__dirname, 'assets/images', 'banner.jpg'))
));

app.get('/favicon.ico', (req, res) => (
  res.sendFile(path.join(__dirname, 'assets/images', 'favicon.ico'))
));

// Send all requests to index.html
app.get('*', (req, res) => { res.sendFile(path.join(__dirname, 'assets', 'index.html')); });

app.listen(process.env.PORT || 3000);
