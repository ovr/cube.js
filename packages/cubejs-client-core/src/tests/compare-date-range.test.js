import 'jest';
import ResultSet from '../ResultSet';

jest.mock('moment-range', () => {
  const Moment = jest.requireActual('moment');
  const MomentRange = jest.requireActual('moment-range');
  const moment = MomentRange.extendMoment(Moment);
  return {
    extendMoment: () => moment,
  };
});

const loadResponses = [
  [
    {
      query: {
        measures: ['Orders.count'],
        timeDimensions: [
          {
            dimension: 'Orders.ts',
            granularity: 'day',
            dateRange: ['2020-08-10T00:00:00.000', '2020-08-16T23:59:59.999'],
          },
        ],
        filters: [],
        timezone: 'UTC',
        order: [],
        dimensions: [],
      },
      data: [
        { 'Orders.ts.day': '2020-08-10T00:00:00.000', 'Orders.ts': '2020-08-10T00:00:00.000', 'Orders.count': 1 },
        { 'Orders.ts.day': '2020-08-12T00:00:00.000', 'Orders.ts': '2020-08-12T00:00:00.000', 'Orders.count': 1 },
      ],
      annotation: {
        measures: {
          'Orders.count': {
            title: 'Orders Count',
            shortTitle: 'Count',
            type: 'number',
            drillMembers: ['Orders.id', 'Orders.title'],
            drillMembersGrouped: { measures: [], dimensions: ['Orders.id', 'Orders.title'] },
          },
        },
        dimensions: {},
        segments: {},
        timeDimensions: {
          'Orders.ts.day': { title: 'Orders Ts', shortTitle: 'Ts', type: 'time' },
          'Orders.ts': { title: 'Orders Ts', shortTitle: 'Ts', type: 'time' },
        },
      },
    },
    {
      query: {
        measures: ['Orders.count'],
        timeDimensions: [
          {
            dimension: 'Orders.ts',
            granularity: 'day',
            dateRange: ['2020-08-03T00:00:00.000', '2020-08-09T23:59:59.999'],
          },
        ],
        filters: [],
        timezone: 'UTC',
        order: [],
        dimensions: [],
      },
      data: [
        { 'Orders.ts.day': '2020-08-03T00:00:00.000', 'Orders.ts': '2020-08-03T00:00:00.000', 'Orders.count': 2 },
        { 'Orders.ts.day': '2020-08-04T00:00:00.000', 'Orders.ts': '2020-08-04T00:00:00.000', 'Orders.count': 1 },
        { 'Orders.ts.day': '2020-08-06T00:00:00.000', 'Orders.ts': '2020-08-06T00:00:00.000', 'Orders.count': 1 },
        { 'Orders.ts.day': '2020-08-08T00:00:00.000', 'Orders.ts': '2020-08-08T00:00:00.000', 'Orders.count': 1 },
      ],
      annotation: {
        measures: {
          'Orders.count': {
            title: 'Orders Count',
            shortTitle: 'Count',
            type: 'number',
            drillMembers: ['Orders.id', 'Orders.title'],
            drillMembersGrouped: { measures: [], dimensions: ['Orders.id', 'Orders.title'] },
          },
        },
        dimensions: {},
        segments: {},
        timeDimensions: {
          'Orders.ts.day': { title: 'Orders Ts', shortTitle: 'Ts', type: 'time' },
          'Orders.ts': { title: 'Orders Ts', shortTitle: 'Ts', type: 'time' },
        },
      },
    },
  ],
  [
    {
      query: {
        measures: ['Orders.count'],
        dimensions: ['Users.country'],
        timeDimensions: [
          {
            dimension: 'Orders.ts',
            granularity: 'day',
            dateRange: ['2020-08-10T00:00:00.000', '2020-08-16T23:59:59.999'],
          },
        ],
        filters: [],
        timezone: 'UTC',
        order: [],
      },
      data: [
        {
          'Users.country': 'US',
          'Orders.ts.day': '2020-08-10T00:00:00.000',
          'Orders.ts': '2020-08-10T00:00:00.000',
          'Orders.count': 1,
        },
        {
          'Users.country': 'France',
          'Orders.ts.day': '2020-08-12T00:00:00.000',
          'Orders.ts': '2020-08-12T00:00:00.000',
          'Orders.count': 1,
        },
      ],
      annotation: {
        measures: {
          'Orders.count': {
            title: 'Orders Count',
            shortTitle: 'Count',
            type: 'number',
            drillMembers: ['Orders.id', 'Orders.title'],
            drillMembersGrouped: {
              measures: [],
              dimensions: ['Orders.id', 'Orders.title'],
            },
          },
        },
        dimensions: {
          'Users.country': {
            title: 'Users Country',
            shortTitle: 'Country',
            type: 'string',
          },
        },
        segments: {},
        timeDimensions: {
          'Orders.ts.day': {
            title: 'Orders Ts',
            shortTitle: 'Ts',
            type: 'time',
          },
          'Orders.ts': { title: 'Orders Ts', shortTitle: 'Ts', type: 'time' },
        },
      },
    },
    {
      query: {
        measures: ['Orders.count'],
        dimensions: ['Users.country'],
        timeDimensions: [
          {
            dimension: 'Orders.ts',
            granularity: 'day',
            dateRange: ['2020-08-03T00:00:00.000', '2020-08-09T23:59:59.999'],
          },
        ],
        filters: [],
        timezone: 'UTC',
        order: [],
      },
      data: [
        {
          'Users.country': 'Australia',
          'Orders.ts.day': '2020-08-03T00:00:00.000',
          'Orders.ts': '2020-08-03T00:00:00.000',
          'Orders.count': 2,
        },
        {
          'Users.country': 'France',
          'Orders.ts.day': '2020-08-04T00:00:00.000',
          'Orders.ts': '2020-08-04T00:00:00.000',
          'Orders.count': 1,
        },
        {
          'Users.country': 'US',
          'Orders.ts.day': '2020-08-06T00:00:00.000',
          'Orders.ts': '2020-08-06T00:00:00.000',
          'Orders.count': 1,
        },
        {
          'Users.country': 'France',
          'Orders.ts.day': '2020-08-08T00:00:00.000',
          'Orders.ts': '2020-08-08T00:00:00.000',
          'Orders.count': 1,
        },
      ],
      annotation: {
        measures: {
          'Orders.count': {
            title: 'Orders Count',
            shortTitle: 'Count',
            type: 'number',
            drillMembers: ['Orders.id', 'Orders.title'],
            drillMembersGrouped: {
              measures: [],
              dimensions: ['Orders.id', 'Orders.title'],
            },
          },
        },
        dimensions: {
          'Users.country': {
            title: 'Users Country',
            shortTitle: 'Country',
            type: 'string',
          },
        },
        segments: {},
        timeDimensions: {
          'Orders.ts.day': {
            title: 'Orders Ts',
            shortTitle: 'Ts',
            type: 'time',
          },
          'Orders.ts': { title: 'Orders Ts', shortTitle: 'Ts', type: 'time' },
        },
      },
    },
  ],
];

describe('compare date range', () => {
  const resultSet1 = new ResultSet(loadResponses[0]);
  const resultSet2 = new ResultSet(loadResponses[1]);

  describe('series and seriesNames', () => {
    test('with a single time dimension', () => {
      expect(resultSet1.seriesNames()).toStrictEqual([
        {
          key: '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,Orders.count',
          title: '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999, Orders Count',
          yValues: ['2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999', 'Orders.count'],
        },
        {
          key: '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,Orders.count',
          title: '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999, Orders Count',
          yValues: ['2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999', 'Orders.count'],
        },
      ]);

      expect(resultSet1.series()).toStrictEqual([
        {
          key: '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,Orders.count',
          series: [
            {
              category: '2020-08-10T00:00:00.000',
              value: 1,
              x: '2020-08-10T00:00:00.000',
            },
            {
              category: '2020-08-11T00:00:00.000',
              value: 0,
              x: '2020-08-11T00:00:00.000',
            },
            {
              category: '2020-08-12T00:00:00.000',
              value: 1,
              x: '2020-08-12T00:00:00.000',
            },
            {
              category: '2020-08-13T00:00:00.000',
              value: 0,
              x: '2020-08-13T00:00:00.000',
            },
            {
              category: '2020-08-14T00:00:00.000',
              value: 0,
              x: '2020-08-14T00:00:00.000',
            },
            {
              category: '2020-08-15T00:00:00.000',
              value: 0,
              x: '2020-08-15T00:00:00.000',
            },
            {
              category: '2020-08-16T00:00:00.000',
              value: 0,
              x: '2020-08-16T00:00:00.000',
            },
          ],
          title: '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999, Orders Count',
        },
        {
          key: '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,Orders.count',
          series: [
            {
              category: '2020-08-10T00:00:00.000',
              value: 2,
              x: '2020-08-10T00:00:00.000',
            },
            {
              category: '2020-08-11T00:00:00.000',
              value: 1,
              x: '2020-08-11T00:00:00.000',
            },
            {
              category: '2020-08-12T00:00:00.000',
              value: 0,
              x: '2020-08-12T00:00:00.000',
            },
            {
              category: '2020-08-13T00:00:00.000',
              value: 1,
              x: '2020-08-13T00:00:00.000',
            },
            {
              category: '2020-08-14T00:00:00.000',
              value: 0,
              x: '2020-08-14T00:00:00.000',
            },
            {
              category: '2020-08-15T00:00:00.000',
              value: 1,
              x: '2020-08-15T00:00:00.000',
            },
            {
              category: '2020-08-16T00:00:00.000',
              value: 0,
              x: '2020-08-16T00:00:00.000',
            },
          ],
          title: '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999, Orders Count',
        },
      ]);
    });
  });

  describe('chartPivot', () => {
    test('with a single time dimension', () => {
      expect(resultSet1.chartPivot()).toStrictEqual([
        {
          category: '2020-08-10T00:00:00.000',
          x: '2020-08-10T00:00:00.000',
          xValues: ['2020-08-10T00:00:00.000'],
          '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,Orders.count': 1,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,Orders.count': 2,
        },
        {
          category: '2020-08-11T00:00:00.000',
          x: '2020-08-11T00:00:00.000',
          xValues: ['2020-08-11T00:00:00.000'],
          '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,Orders.count': 0,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,Orders.count': 1,
        },
        {
          category: '2020-08-12T00:00:00.000',
          x: '2020-08-12T00:00:00.000',
          xValues: ['2020-08-12T00:00:00.000'],
          '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,Orders.count': 1,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,Orders.count': 0,
        },
        {
          category: '2020-08-13T00:00:00.000',
          x: '2020-08-13T00:00:00.000',
          xValues: ['2020-08-13T00:00:00.000'],
          '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,Orders.count': 0,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,Orders.count': 1,
        },
        {
          category: '2020-08-14T00:00:00.000',
          x: '2020-08-14T00:00:00.000',
          xValues: ['2020-08-14T00:00:00.000'],
          '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,Orders.count': 0,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,Orders.count': 0,
        },
        {
          category: '2020-08-15T00:00:00.000',
          x: '2020-08-15T00:00:00.000',
          xValues: ['2020-08-15T00:00:00.000'],
          '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,Orders.count': 0,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,Orders.count': 1,
        },
        {
          category: '2020-08-16T00:00:00.000',
          x: '2020-08-16T00:00:00.000',
          xValues: ['2020-08-16T00:00:00.000'],
          '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,Orders.count': 0,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,Orders.count': 0,
        },
      ]);
    });

    test('with two dimensions', () => {
      expect(resultSet2.chartPivot()).toStrictEqual([
        {
          category: '2020-08-10T00:00:00.000',
          x: '2020-08-10T00:00:00.000',
          xValues: ['2020-08-10T00:00:00.000'],
          '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,US,Orders.count': 1,
          '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,France,Orders.count': 0,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,Australia,Orders.count': 2,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,France,Orders.count': 0,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,US,Orders.count': 0,
        },
        {
          category: '2020-08-11T00:00:00.000',
          x: '2020-08-11T00:00:00.000',
          xValues: ['2020-08-11T00:00:00.000'],
          '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,US,Orders.count': 0,
          '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,France,Orders.count': 0,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,Australia,Orders.count': 0,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,France,Orders.count': 1,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,US,Orders.count': 0,
        },
        {
          category: '2020-08-12T00:00:00.000',
          x: '2020-08-12T00:00:00.000',
          xValues: ['2020-08-12T00:00:00.000'],
          '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,US,Orders.count': 0,
          '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,France,Orders.count': 1,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,Australia,Orders.count': 0,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,France,Orders.count': 0,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,US,Orders.count': 0,
        },
        {
          category: '2020-08-13T00:00:00.000',
          x: '2020-08-13T00:00:00.000',
          xValues: ['2020-08-13T00:00:00.000'],
          '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,US,Orders.count': 0,
          '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,France,Orders.count': 0,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,Australia,Orders.count': 0,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,France,Orders.count': 0,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,US,Orders.count': 1,
        },
        {
          category: '2020-08-14T00:00:00.000',
          x: '2020-08-14T00:00:00.000',
          xValues: ['2020-08-14T00:00:00.000'],
          '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,US,Orders.count': 0,
          '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,France,Orders.count': 0,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,Australia,Orders.count': 0,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,France,Orders.count': 0,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,US,Orders.count': 0,
        },
        {
          category: '2020-08-15T00:00:00.000',
          x: '2020-08-15T00:00:00.000',
          xValues: ['2020-08-15T00:00:00.000'],
          '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,US,Orders.count': 0,
          '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,France,Orders.count': 0,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,Australia,Orders.count': 0,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,France,Orders.count': 1,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,US,Orders.count': 0,
        },
        {
          category: '2020-08-16T00:00:00.000',
          x: '2020-08-16T00:00:00.000',
          xValues: ['2020-08-16T00:00:00.000'],
          '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,US,Orders.count': 0,
          '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,France,Orders.count': 0,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,Australia,Orders.count': 0,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,France,Orders.count': 0,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,US,Orders.count': 0,
        },
      ]);
    });
  });

  describe('tablePivot and tableColumns', () => {
    test('with a single time dimension', () => {
      expect(resultSet1.tableColumns()).toMatchObject([
        {
          key: 'Orders.ts.day',
          title: 'Orders Ts',
          shortTitle: 'Ts',
          type: 'time',
          dataIndex: 'Orders.ts.day',
        },
        {
          key: '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999',
          title: '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999',
          shortTitle: '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999',
          children: [
            {
              key: 'Orders.count',
              type: 'number',
              dataIndex: '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,Orders.count',
              title: 'Orders Count',
              shortTitle: 'Count',
            },
          ],
        },
        {
          key: '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999',
          title: '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999',
          shortTitle: '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999',
          children: [
            {
              key: 'Orders.count',
              type: 'number',
              dataIndex: '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,Orders.count',
              title: 'Orders Count',
              shortTitle: 'Count',
            },
          ],
        },
      ]);

      expect(resultSet1.tablePivot()).toStrictEqual([
        {
          'Orders.ts.day': '2020-08-10T00:00:00.000',
          '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,Orders.count': 1,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,Orders.count': 2,
        },
        {
          'Orders.ts.day': '2020-08-11T00:00:00.000',
          '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,Orders.count': 0,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,Orders.count': 1,
        },
        {
          'Orders.ts.day': '2020-08-12T00:00:00.000',
          '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,Orders.count': 1,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,Orders.count': 0,
        },
        {
          'Orders.ts.day': '2020-08-13T00:00:00.000',
          '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,Orders.count': 0,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,Orders.count': 1,
        },
        {
          'Orders.ts.day': '2020-08-14T00:00:00.000',
          '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,Orders.count': 0,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,Orders.count': 0,
        },
        {
          'Orders.ts.day': '2020-08-15T00:00:00.000',
          '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,Orders.count': 0,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,Orders.count': 1,
        },
        {
          'Orders.ts.day': '2020-08-16T00:00:00.000',
          '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,Orders.count': 0,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,Orders.count': 0,
        },
      ]);
    });

    test('with two dimensions', () => {
      const pivotConfig = {
        x: ['Orders.ts.day'],
        y: ['Users.country', 'measures'],
      };

      expect(resultSet2.tableColumns(pivotConfig)).toMatchObject([
        {
          key: 'Orders.ts.day',
          title: 'Orders Ts',
          shortTitle: 'Ts',
          type: 'time',
          dataIndex: 'Orders.ts.day',
        },
        {
          key: '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999',
          title: '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999',
          shortTitle: '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999',
          children: [
            {
              key: 'US',
              type: 'string',
              title: 'Users Country US',
              shortTitle: 'US',
              children: [
                {
                  key: 'Orders.count',
                  type: 'number',
                  dataIndex: '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,US,Orders.count',
                  title: 'Orders Count',
                  shortTitle: 'Count',
                },
              ],
            },
            {
              key: 'France',
              type: 'string',
              title: 'Users Country France',
              shortTitle: 'France',
              children: [
                {
                  key: 'Orders.count',
                  type: 'number',
                  dataIndex: '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,France,Orders.count',
                  title: 'Orders Count',
                  shortTitle: 'Count',
                },
              ],
            },
          ],
        },
        {
          key: '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999',
          title: '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999',
          shortTitle: '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999',
          children: [
            {
              key: 'Australia',
              type: 'string',
              title: 'Users Country Australia',
              shortTitle: 'Australia',
              children: [
                {
                  key: 'Orders.count',
                  type: 'number',
                  dataIndex: '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,Australia,Orders.count',
                  title: 'Orders Count',
                  shortTitle: 'Count',
                },
              ],
            },
            {
              key: 'France',
              type: 'string',
              title: 'Users Country France',
              shortTitle: 'France',
              children: [
                {
                  key: 'Orders.count',
                  type: 'number',
                  dataIndex: '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,France,Orders.count',
                  title: 'Orders Count',
                  shortTitle: 'Count',
                },
              ],
            },
            {
              key: 'US',
              type: 'string',
              title: 'Users Country US',
              shortTitle: 'US',
              children: [
                {
                  key: 'Orders.count',
                  type: 'number',
                  dataIndex: '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,US,Orders.count',
                  title: 'Orders Count',
                  shortTitle: 'Count',
                },
              ],
            },
          ],
        },
      ]);

      expect(resultSet2.tablePivot(pivotConfig)).toStrictEqual([
        {
          'Orders.ts.day': '2020-08-10T00:00:00.000',
          '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,US,Orders.count': 1,
          '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,France,Orders.count': 0,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,Australia,Orders.count': 2,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,France,Orders.count': 0,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,US,Orders.count': 0,
        },
        {
          'Orders.ts.day': '2020-08-11T00:00:00.000',
          '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,US,Orders.count': 0,
          '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,France,Orders.count': 0,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,Australia,Orders.count': 0,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,France,Orders.count': 1,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,US,Orders.count': 0,
        },
        {
          'Orders.ts.day': '2020-08-12T00:00:00.000',
          '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,US,Orders.count': 0,
          '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,France,Orders.count': 1,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,Australia,Orders.count': 0,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,France,Orders.count': 0,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,US,Orders.count': 0,
        },
        {
          'Orders.ts.day': '2020-08-13T00:00:00.000',
          '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,US,Orders.count': 0,
          '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,France,Orders.count': 0,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,Australia,Orders.count': 0,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,France,Orders.count': 0,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,US,Orders.count': 1,
        },
        {
          'Orders.ts.day': '2020-08-14T00:00:00.000',
          '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,US,Orders.count': 0,
          '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,France,Orders.count': 0,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,Australia,Orders.count': 0,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,France,Orders.count': 0,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,US,Orders.count': 0,
        },
        {
          'Orders.ts.day': '2020-08-15T00:00:00.000',
          '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,US,Orders.count': 0,
          '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,France,Orders.count': 0,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,Australia,Orders.count': 0,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,France,Orders.count': 1,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,US,Orders.count': 0,
        },
        {
          'Orders.ts.day': '2020-08-16T00:00:00.000',
          '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,US,Orders.count': 0,
          '2020-08-10T00:00:00.000 - 2020-08-16T23:59:59.999,France,Orders.count': 0,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,Australia,Orders.count': 0,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,France,Orders.count': 0,
          '2020-08-03T00:00:00.000 - 2020-08-09T23:59:59.999,US,Orders.count': 0,
        },
      ]);
    });
  });
});
