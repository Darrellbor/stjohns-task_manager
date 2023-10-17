// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//

const questions = [
  {
    type: 'input',
    name: 'compName',
    message: 'What is the name of your component?',
  },
  {
    type: 'input',
    name: 'compPath',
    message: 'Where should we create your component?',
  },
];
module.exports = {
  prompt: ({ prompter, args }) =>
    prompter
      .prompt({
        type: 'select',
        name: 'compType',
        message: 'Type of component?',
        choices: ['atom', 'molecule', 'organism', 'template', 'other'],
      })
      .then(async ({ compType }) => {
        if (compType === 'other') {
          const result = await prompter.prompt({
            type: 'select',
            name: 'otherCompType',
            message: 'Type of other component?',
            choices: ['layout', 'molecule', 'organism', 'template'],
          });

          return { ...result, compType };
        } else {
          return { compType };
        }
      })
      .then(firstBatchAnswers => {
        return prompter.prompt(questions).then(answers => {
          const { compType, otherCompType } = firstBatchAnswers;
          const { compName, compPath } = answers;

          const allAnswers = {
            ...firstBatchAnswers,
            ...answers,
            isAtom: compType === 'atom',
            isMolecule: compType === 'molecule',
            isOrganism: compType === 'organism',
            isTemplate: compType === 'template',
            isOthers: compType === 'other',
            propsName: `I${compName}Props`,
            stylePropName: `I${compName}StyleProps`,
            storyPath: `${
              compType == 'atom'
                ? `${compType}s/${compPath !== '.' ? `${compPath}/` : ''}`
                : compType == 'other'
                ? `${compType}s/${otherCompType}s/${compPath !== '.' ? `${compPath}/` : ''}`
                : `${compPath}/${compType}s/`
            }${compName}`,
            path: `src${compType == 'atom' || compType == 'other' ? `/${compType}s` : `/modules`}/${
              compType == 'other' ? `${otherCompType}s/` : ``
            }${compPath}/${
              compType != 'atom' && compType != 'other' ? `${compType}s/` : ``
            }${compName}`,
          };

          return allAnswers;
        });
      }),
};
