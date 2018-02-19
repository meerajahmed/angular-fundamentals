import {Injectable} from "@angular/core";
import {ISession} from "../../shared/event.model";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class VoterService {

  constructor(private http: Http){}

  deleteVoter(eventsId: number, session: ISession, voterName: string){
    session.voters = session.voters.filter( voter => voter !== voterName)
    return this.http.delete(`/api/events/${eventsId}/sessions/${session.id}/voters/${voterName}`)
      .catch(this.handleErrors);
  }

  addVoter(eventsId: number,session: ISession, voterName: string){
    let headers, options, url;
    session.voters.push(voterName);
    headers = new Headers({
      "Content-Type": "application/json"
    });
    options = new RequestOptions({ headers: headers});
    url = `/api/events/${eventsId}/sessions/${session.id}/voters/${voterName}`;
    return this.http.post(url, JSON.stringify({}), options)
      .catch(this.handleErrors);
  }

  private handleErrors(error: Response) {
    return Observable.throw(error.statusText)
  }

  userHasVoted(session: ISession, voterName: string){
    return session.voters.some(voter => voter === voterName);
  }
}