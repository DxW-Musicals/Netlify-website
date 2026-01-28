import classNames from 'classnames';

import ImageBlock from '@/components/molecules/ImageBlock';
import { mapStylesToClassNames as mapStyles } from '@/utils/map-styles-to-class-names';
import Section from '../Section';

export default function FeaturedPeopleSection(props) {
    const { elementId, colors, title, subtitle, styles = {}, ...rest } = props;
    const sectionAlign = styles.self?.textAlign ?? 'center';
    return (
        <Section elementId={elementId} colors={colors} styles={styles.self}>
            {title?.text && (
                <h2 className={classNames('text-4xl sm:text-5xl', mapStyles({ textAlign: sectionAlign }))}>
                    {title.text}
                </h2>
            )}
            {subtitle && (
                <p
                    className={classNames('text-lg sm:text-xl', mapStyles({ textAlign: sectionAlign }), {
                        'mt-6': title?.text
                    })}
                >
                    {subtitle}
                </p>
            )}
            <PeopleVariants {...rest} className={title?.text || subtitle ? 'mt-16 sm:mt-20' : undefined} />
        </Section>
    );
}

function PeopleVariants(props) {
    const { variant = 'two-col-grid', ...rest } = props;
    switch (variant) {
        case 'three-col-grid':
            return <PeopleThreeColGrid {...rest} />;
        case 'four-col-grid':
            return <PeopleFourColGrid {...rest} />;
        default:
            return <PeopleTwoColGrid {...rest} />;
    }
}

function PeopleTwoColGrid(props) {
    const { people = [], className } = props;
    if (people.length === 0) {
        return null;
    }
    return (
        <div className={classNames('grid md:grid-cols-2 gap-12 md:gap-16', className)}>
            {people.map((person, index) => (
                <PersonCard key={index} person={person} />
            ))}
        </div>
    );
}

function PeopleThreeColGrid(props) {
    const { people = [], className } = props;
    if (people.length === 0) {
        return null;
    }
    return (
        <div className={classNames('grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16', className)}>
            {people.map((person, index) => (
                <PersonCard key={index} person={person} />
            ))}
        </div>
    );
}

function PeopleFourColGrid(props) {
    const { people = [], className } = props;
    if (people.length === 0) {
        return null;
    }
    return (
        <div className={classNames('grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16', className)}>
            {people.map((person, index) => (
                <PersonCard key={index} person={person} />
            ))}
        </div>
    );
}

function PersonCard({ person }) {
    const fullName = [person.firstName, person.lastName].filter(Boolean).join(' ');
    
    return (
        <div className="flex flex-col space-y-6">
            {person.image && (
                <div className="flex justify-center">
                    <ImageBlock {...person.image} className="object-cover w-48 h-48 rounded-full" />
                </div>
            )}
            <div className="text-center space-y-2">
                {fullName && <h3 className="text-2xl sm:text-3xl font-medium">{fullName}</h3>}
                {person.role && <p className="text-lg text-gray-600">{person.role}</p>}
                {person.bio && <p className="text-base mt-4">{person.bio}</p>}
            </div>
        </div>
    );
}