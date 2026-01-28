import { Model } from '@stackbit/types';
import { colorFields, settingFields, settingFieldsGroup, styleFieldsGroup } from './section-common-fields';

export const FeaturedPeopleSectionModel: Model = {
    type: 'object',
    name: 'FeaturedPeopleSection',
    label: 'Featured People',
    labelField: 'title.text',
    thumbnail: 'https://assets.stackbit.com/components/models/thumbnails/default.png',
    groups: ['SectionModels'],
    fieldGroups: [...styleFieldsGroup, ...settingFieldsGroup],
    fields: [
        {
            type: 'model',
            name: 'title',
            label: 'Title',
            models: ['TitleBlock']
        },
        {
            type: 'string',
            name: 'subtitle',
            label: 'Subtitle'
        },
        {
            type: 'list',
            name: 'people',
            label: 'People',
            items: {
                type: 'reference',
                models: ['Person']
            }
        },
        ...colorFields,
        {
            type: 'enum',
            name: 'variant',
            group: 'styles',
            label: 'Arrangement',
            options: [
                {
                    label: 'Two columns',
                    value: 'two-col-grid'
                },
                {
                    label: 'Three columns',
                    value: 'three-col-grid'
                },
                {
                    label: 'Four columns',
                    value: 'four-col-grid'
                }
            ],
            default: 'two-col-grid',
            required: true
        },
        ...settingFields,
        {
            type: 'style',
            name: 'styles',
            styles: {
                self: {
                    height: ['auto', 'screen'],
                    width: ['narrow', 'wide', 'full'],
                    margin: ['tw0:96'],
                    padding: ['tw0:96'],
                    borderRadius: '*',
                    borderWidth: ['0:8'],
                    borderStyle: '*',
                    borderColor: [
                        {
                            value: 'border-(--theme-light)',
                            label: 'Light color',
                            color: '$light'
                        },
                        {
                            value: 'border-(--theme-dark)',
                            label: 'Dark color',
                            color: '$dark'
                        },
                        {
                            value: 'border-(--theme-primary)',
                            label: 'Primary color',
                            color: '$primary'
                        },
                        {
                            value: 'border-(--theme-secondary)',
                            label: 'Secondary color',
                            color: '$secondary'
                        },
                        {
                            value: 'border-(--theme-complementary)',
                            label: 'Complementary color',
                            color: '$complementary'
                        }
                    ],
                    textAlign: ['left', 'center', 'right'],
                    justifyContent: ['flex-start', 'flex-end', 'center']
                },
                subtitle: {
                    fontStyle: '*',
                    fontWeight: ['400', '500', '700'],
                    textDecoration: '*',
                    textAlign: '*'
                }
            },
            default: {
                self: {
                    height: 'auto',
                    width: 'wide',
                    margin: ['mt-0', 'mb-0', 'ml-0', 'mr-0'],
                    padding: ['pt-12', 'pb-12', 'pl-4', 'pr-4'],
                    borderRadius: 'none',
                    borderWidth: 0,
                    borderStyle: 'none',
                    borderColor: 'border-(--theme-dark)',
                    textAlign: 'center',
                    justifyContent: 'center'
                }
            }
        }
    ]
};