import find from 'lodash/find';
import map from 'lodash/map';
import set from 'lodash/set';

import { DEFAULT_PROJECT_KEY } from './projects.constant';
import Project from './Project.class';

export default class {
  /* @ngInject */
  constructor($q, ovhUserPref, publicCloud) {
    this.$q = $q;
    this.ovhUserPref = ovhUserPref;
    this.publicCloud = publicCloud;
  }

  getDefaultProject() {
    return this.ovhUserPref.getValue(DEFAULT_PROJECT_KEY).catch((err) => {
      if (err.status === 404) {
        return null;
      }
      throw err;
    });
  }

  getProjects(filters = [], sort = 'description', sortOrder = 'asc') {
    return this.$q
      .all([
        this.publicCloud.getProjects(filters, sort, sortOrder),
        this.publicCloud.getServices([
          {
            field: 'route.path',
            comparator: 'eq',
            reference: '/cloud/project/{serviceName}',
          },
        ]),
      ])
      .then(([projects, services]) =>
        map(projects, (project) => {
          set(
            project,
            'service',
            find(
              services,
              (service) => project.project_id === service.resource.name,
            ),
          );
          return new Project(project);
        }),
      );
  }

  setAsDefaultProject(projectId) {
    return this.ovhUserPref.create(DEFAULT_PROJECT_KEY, { projectId });
  }

  removeDefaultProject() {
    return this.ovhUserPref.remove(DEFAULT_PROJECT_KEY);
  }
}
