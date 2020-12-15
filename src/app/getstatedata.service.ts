import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root',
})
export class GetstatedataService {
  constructor() {}

  async getStateList() {
    return await axios.get(
      'https://dashboard.healthit.gov/api/open-api.php?source=hospital-mu-public-health-measures.csv'
    );
  }
}
