import {ComponentFixture, TestBed, inject} from '@angular/core/testing';
import {Http, ConnectionBackend, RequestOptions, BaseRequestOptions, Response, ResponseOptions} from '@angular/http';
import {By} from '@angular/platform-browser';
import {MockBackend} from '@angular/http/testing';

import {AppComponent} from './app.component';
import {AppModule} from './app.module';

describe('AppComponent', () => {
  let comp:    AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ],
      imports: [
        AppModule
      ],
      providers: [
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backendInstance, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        ConnectionBackend,
        {
          provide: RequestOptions,
          useValue: {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            }
          }
        }
      ]
    });

    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
  });

  it('should create the AppComponent', () => {
    expect(fixture.debugElement.componentInstance).toBeTruthy();
  });

  it('should create the correct template', inject([MockBackend], (mb: MockBackend) => {
    let httpMock: any = [
      {
        'id': 1,
        'name': 'Leanne Graham',
        'username': 'Bret',
        'email': 'Sincere@april.biz',
        'address': {
          'street': 'Kulas Light',
          'suite': 'Apt. 556',
          'city': 'Gwenborough',
          'zipcode': '92998-3874',
          'geo': {
            'lat': '-37.3159',
            'lng': '81.1496'
          }
        },
        'phone': '1-770-736-8031 x56442',
        'website': 'hildegard.org',
        'company': {
          'name': 'Romaguera-Crona',
          'catchPhrase': 'Multi-layered client-server neural-net',
          'bs': 'harness real-time e-markets'
        }
      },
      {
        'id': 2,
        'name': 'Ervin Howell',
        'username': 'Antonette',
        'email': 'Shanna@melissa.tv',
        'address': {
          'street': 'Victor Plains',
          'suite': 'Suite 879',
          'city': 'Wisokyburgh',
          'zipcode': '90566-7771',
          'geo': {
            'lat': '-43.9509',
            'lng': '-34.4618'
          }
        },
        'phone': '010-692-6593 x09125',
        'website': 'anastasia.net',
        'company': {
          'name': 'Deckow-Crist',
          'catchPhrase': 'Proactive didactic contingency',
          'bs': 'synergize scalable supply-chains'
        }
      },
      {
        'id': 3,
        'name': 'Clementine Bauch',
        'username': 'Samantha',
        'email': 'Nathan@yesenia.net',
        'address': {
          'street': 'Douglas Extension',
          'suite': 'Suite 847',
          'city': 'McKenziehaven',
          'zipcode': '59590-4157',
          'geo': {
            'lat': '-68.6102',
            'lng': '-47.0653'
          }
        },
        'phone': '1-463-123-4447',
        'website': 'ramiro.info',
        'company': {
          'name': 'Romaguera-Jacobson',
          'catchPhrase': 'Face to face bifurcated interface',
          'bs': 'e-enable strategic applications'
        }
      },
    ];
    mb.connections.subscribe((connection) => {
      return connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(httpMock)
      })));
    });
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('md-toolbar')).length).toBe(1);
    expect(fixture.debugElement.queryAll(By.css('md-icon')).length).toBe(1);
    expect(fixture.debugElement.queryAll(By.css('app-user')).length).toBe(3);
    expect(fixture.debugElement.queryAll(By.css('app-post')).length).toBe(0);
    expect(fixture.debugElement.queryAll(By.css('app-comment')).length).toBe(0);

    httpMock = [
      {
        'userId': 1,
        'id': 1,
        'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
      },
      {
        'userId': 1,
        'id': 2,
        'title': 'qui est esse',
        'body': 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
      },
      {
        'userId': 1,
        'id': 3,
        'title': 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
        'body': 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut'
      },
      {
        'userId': 1,
        'id': 4,
        'title': 'eum et est occaecati',
        'body': 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit'
      }
    ];
    comp.userClicked({
      'id': 1,
      'name': 'Leanne Graham',
      'username': 'Bret',
      'email': 'Sincere@april.biz',
      'address': {
        'street': 'Kulas Light',
        'suite': 'Apt. 556',
        'city': 'Gwenborough',
        'zipcode': '92998-3874',
        'geo': {
          'lat': '-37.3159',
          'lng': '81.1496'
        }
      }
    });
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('md-toolbar')).length).toBe(1);
    expect(fixture.debugElement.queryAll(By.css('md-icon')).length).toBe(1);
    expect(fixture.debugElement.queryAll(By.css('app-user')).length).toBe(0);
    expect(fixture.debugElement.queryAll(By.css('app-post')).length).toBe(4);
    expect(fixture.debugElement.queryAll(By.css('app-comment')).length).toBe(0);

    httpMock = [
      {
        'postId': 1,
        'id': 1,
        'name': 'id labore ex et quam laborum',
        'email': 'Eliseo@gardner.biz',
        'body': 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
      },
      {'postId': 1,
        'id': 2,
        'name': 'quo vero reiciendis velit similique earum',
        'email': 'Jayne_Kuhic@sydney.com',
        'body': 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et'
      }
    ];
    comp.postClicked({
      'userId': 1,
      'id': 1,
      'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    });
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('md-toolbar')).length).toBe(1);
    expect(fixture.debugElement.queryAll(By.css('md-icon')).length).toBe(1);
    expect(fixture.debugElement.queryAll(By.css('app-user')).length).toBe(0);
    expect(fixture.debugElement.queryAll(By.css('app-post')).length).toBe(0);
    expect(fixture.debugElement.queryAll(By.css('app-comment')).length).toBe(2);
  }));

  it('should correctly initialize itself', inject([MockBackend], (mb: MockBackend) => {
    const httpMock: any = [
      {
        'id': 1,
        'name': 'Leanne Graham',
        'username': 'Bret',
        'email': 'Sincere@april.biz',
        'address': {
          'street': 'Kulas Light',
          'suite': 'Apt. 556',
          'city': 'Gwenborough',
          'zipcode': '92998-3874',
          'geo': {
            'lat': '-37.3159',
            'lng': '81.1496'
          }
        },
        'phone': '1-770-736-8031 x56442',
        'website': 'hildegard.org',
        'company': {
          'name': 'Romaguera-Crona',
          'catchPhrase': 'Multi-layered client-server neural-net',
          'bs': 'harness real-time e-markets'
        }
      },
      {
        'id': 2,
        'name': 'Ervin Howell',
        'username': 'Antonette',
        'email': 'Shanna@melissa.tv',
        'address': {
          'street': 'Victor Plains',
          'suite': 'Suite 879',
          'city': 'Wisokyburgh',
          'zipcode': '90566-7771',
          'geo': {
            'lat': '-43.9509',
            'lng': '-34.4618'
          }
        },
        'phone': '010-692-6593 x09125',
        'website': 'anastasia.net',
        'company': {
          'name': 'Deckow-Crist',
          'catchPhrase': 'Proactive didactic contingency',
          'bs': 'synergize scalable supply-chains'
        }
      },
      {
        'id': 3,
        'name': 'Clementine Bauch',
        'username': 'Samantha',
        'email': 'Nathan@yesenia.net',
        'address': {
          'street': 'Douglas Extension',
          'suite': 'Suite 847',
          'city': 'McKenziehaven',
          'zipcode': '59590-4157',
          'geo': {
            'lat': '-68.6102',
            'lng': '-47.0653'
          }
        },
        'phone': '1-463-123-4447',
        'website': 'ramiro.info',
        'company': {
          'name': 'Romaguera-Jacobson',
          'catchPhrase': 'Face to face bifurcated interface',
          'bs': 'e-enable strategic applications'
        }
      },
    ];
    mb.connections.subscribe((connection) => {
      return connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(httpMock)
      })));
    });

    comp.ngOnInit();
    expect(comp.users).toEqual(httpMock);
    expect(comp.selector).toBe('users');
  }));

  it('should handle click on user', inject([MockBackend], (mb: MockBackend) => {
    const httpMock = [
      {
        'userId': 1,
        'id': 1,
        'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
      },
      {
        'userId': 1,
        'id': 2,
        'title': 'qui est esse',
        'body': 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
      },
      {
        'userId': 1,
        'id': 3,
        'title': 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
        'body': 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut'
      },
      {
        'userId': 1,
        'id': 4,
        'title': 'eum et est occaecati',
        'body': 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit'
      }
    ];
    mb.connections.subscribe((connection) => {
      return connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(httpMock)
      })));
    });

    comp.userClicked({
      'id': 1,
      'name': 'Leanne Graham',
      'username': 'Bret',
      'email': 'Sincere@april.biz',
      'address': {
        'street': 'Kulas Light',
        'suite': 'Apt. 556',
        'city': 'Gwenborough',
        'zipcode': '92998-3874',
        'geo': {
          'lat': '-37.3159',
          'lng': '81.1496'
        }
      },
      'phone': '1-770-736-8031 x56442',
      'website': 'hildegard.org',
      'company': {
        'name': 'Romaguera-Crona',
        'catchPhrase': 'Multi-layered client-server neural-net',
        'bs': 'harness real-time e-markets'
      }
    });
    expect(comp.posts).toEqual(httpMock);
    expect(comp.selector).toBe('posts');
  }));

  it('should handle click on post', inject([MockBackend], (mb: MockBackend) => {
    const httpMock = [
      {
        'postId': 1,
        'id': 1,
        'name': 'id labore ex et quam laborum',
        'email': 'Eliseo@gardner.biz',
        'body': 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
      },
      {'postId': 1,
        'id': 2,
        'name': 'quo vero reiciendis velit similique earum',
        'email': 'Jayne_Kuhic@sydney.com',
        'body': 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et'
      }
    ];
    mb.connections.subscribe((connection) => {
      return connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(httpMock)
      })));
    });

    comp.postClicked({
      'userId': 1,
      'id': 1,
      'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    });
    expect(comp.comments).toEqual(httpMock);
    expect(comp.selector).toBe('comments');
  }));
});
