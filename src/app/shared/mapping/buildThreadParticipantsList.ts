
import {ApplicationState} from "../../store/application-state";
import {Thread} from "../../../../shared/model/thread";
import * as _ from 'lodash';


export function buildThreadParticipantsList(state:ApplicationState, thread:Thread):string {

    const names = _.keys(thread.participants).map(
        participantId => state.storeData.participants[participantId].name);

    return _.join(names, ",");
}