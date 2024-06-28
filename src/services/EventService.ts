export const EventService = {
  getEventsData() {
    return [
      {
        id: '1',
        code: 'f230fh0g3',
        name: 'Jazz Concert',
        description: 'A smooth evening of jazz music.',
        image: 'jazz-concert.webp',
        date: '2024-07-15T19:00:00',
        address: '123 Jazz St, Music City, NY',
        tickets_sold: 65,
        total_tickets: 100,
        status: 'open'
      },
      {
        id: '2',
        code: 'nvklal433',
        name: 'Rock Festival',
        description: 'A weekend of rock and roll.',
        image: 'rock-festival.webp',
        date: '2024-08-10T15:00:00',
        address: '456 Rock Ave, Music City, NY',
        tickets_sold: 72,
        total_tickets: 200,
        status: 'open'
      },
      {
        id: '3',
        code: 'zz21cz3c1',
        name: 'Art Exhibition',
        description: 'A display of contemporary art.',
        image: 'art-exhibition.webp',
        date: '2024-09-05T10:00:00',
        address: '789 Art Blvd, Art City, NY',
        tickets_sold: 2,
        total_tickets: 50,
        status: 'open'
      },
      {
        id: '4',
        code: '244wgerg2',
        name: 'Tech Conference',
        description: 'A gathering of tech enthusiasts.',
        image: 'tech-conference.webp',
        date: '2024-11-20T09:00:00',
        address: '321 Tech Dr, Innovation City, CA',
        tickets_sold: 25,
        total_tickets: 150,
        status: 'open'
      },
      {
        id: '5',
        code: 'h456wer53',
        name: 'Food Festival',
        description: 'A day of gourmet food and wine.',
        image: 'food-festival.webp',
        date: '2024-12-10T12:00:00',
        address: '654 Gourmet Ln, Food City, CA',
        tickets_sold: 73,
        total_tickets: 100,
        status: 'open'
      },
      {
        id: '6',
        code: 'av2231fwg',
        name: 'Film Premiere',
        description: 'The premiere of an anticipated movie.',
        image: 'film-premiere.webp',
        date: '2024-07-20T18:00:00',
        address: '987 Cinema St, Film City, CA',
        tickets_sold: 0,
        total_tickets: 200,
        status: 'closed'
      },
      {
        id: '7',
        code: 'bib36pfvm',
        name: 'Dance Show',
        description: 'An evening of contemporary dance.',
        image: 'dance-show.webp',
        date: '2024-08-25T20:00:00',
        address: '159 Dance Blvd, Art City, NY',
        tickets_sold: 5,
        total_tickets: 50,
        status: 'open'
      },
      {
        id: '8',
        code: 'mbvjkgip5',
        name: 'Theater Play',
        description: 'A dramatic theater play.',
        image: 'theater-play.webp',
        date: '2024-09-15T19:30:00',
        address: '753 Drama Rd, Theater City, NY',
        tickets_sold: 23,
        total_tickets: 100,
        status: 'open'
      },
      {
        id: '9',
        code: 'vbb124btr',
        name: 'Comedy Show',
        description: 'An evening of stand-up comedy.',
        image: 'comedy-show.webp',
        date: '2024-07-30T20:00:00',
        address: '951 Comedy Ln, Laugh City, CA',
        tickets_sold: 2,
        total_tickets: 50,
        status: 'open'
      },
      {
        id: '10',
        code: 'cm230f032',
        name: 'Science Fair',
        description: 'A showcase of scientific innovations.',
        image: 'science-fair.webp',
        date: '2024-10-05T09:00:00',
        address: '852 Science Ave, Knowledge City, NY',
        tickets_sold: 63,
        total_tickets: 100,
        status: 'open'
      }
    ]
  },

  getEventsMini() {
    return Promise.resolve(this.getEventsData().slice(0, 5))
  },

  getEventsSmall() {
    return Promise.resolve(this.getEventsData().slice(0, 10))
  },

  getEvents() {
    return Promise.resolve(this.getEventsData())
  },

  getEvent(id: string | number) {
    const eventId = String(id)
    return Promise.resolve(this.getEventsData().find((event) => event.id === eventId))
  }
}
